import React, { useEffect } from 'react';
import PlantCard from './PlantCard.js';
import { useSelector, useDispatch } from 'react-redux';
import { useGetUserPlantsQuery, useDeletePlantMutation } from '../../features/api/http_plantsApiSlice.js';
import { openModal, closeModal } from '../../features/modals/modalsSlice.js';
import AddPlantModal from './AddPlantModal.js';
import './../../styles/css/add-plant-button.css';
import { 
  plantsSelectors, 
  plantRemoved,
  visibility_initialize,  
  visibility_setOptimisticOpacity,  
  visibility_setOptimisticDelete,
  visibility_setNormal  
} from '../../features/plants/plantsSlice.js';


export default function Plants() { 
  const username = useSelector(state => state.auth.userInfo.username);

  const { data, isLoading, isError, refetch } = useGetUserPlantsQuery(username);
  
  const [deletePlant] = useDeletePlantMutation();
  const deletingPlantIds = useSelector(state => state.plants.deletingPlantIds);
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.modals.addPlantModal.isOpen);

  useEffect(() => {
    if (data?.plants) {
      const plantIds = data.plants.map(plant => plant.plantid);
      dispatch(visibility_initialize(plantIds));
    }
  }, [dispatch, data]);


  const handleDelete = async (username, plantId) => {
    dispatch(visibility_setOptimisticOpacity({ plantId }));
    setTimeout(() => {
      dispatch(visibility_setOptimisticDelete({ plantId }));
      setTimeout(async () => {
        
        await refetch();
        
        const plantStillExists = data?.plants.some(plant => plant.plantid === plantId);
        if (plantStillExists) {
          dispatch(visibility_setNormal({ plantId })); 
        } else {
          dispatch(plantRemoved({ plantId })); 
        }
      }, 4000); 
    }, 2000); 
};

  const handleOpenModal = () => {
    dispatch(openModal({ modalId: 'addPlantModal' }));
  };

  const handleCloseModal = () => {
    dispatch(closeModal({ modalId: 'addPlantModal' }));
  };

  // if (isError) {
  //   return <h1>Error fetching user plants</h1>;
  // }

  if (isLoading) {
    return <h1>Loading user plants...</h1>;
  }

  const handleAddPlant = async () => {
    await refetch();
  };

  return (

    <div>
      <h1 className="text-3xl font-bold text-center my-8">My Plants</h1>
      <div className="flex justify-center">
        {" "}
        <button onClick={handleOpenModal} className="add-plant-button">
          Add a Plant
        </button>
      </div>

      <div className="flex flex-wrap justify-center mx-20 border-t border-green-600 pt-10">
        {data?.plants.slice().reverse().map((plant, index) => (
          <PlantCard 
            key={index} 
            plant={plant} 
            username={username} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
      <AddPlantModal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
}