import React, { useState } from 'react';
import PlantCard from './PlantCard.js';
import { useSelector } from 'react-redux';
import { useGetUserPlantsQuery, useDeletePlantMutation } from '../../features/api/plantsApiSlice.js';
import { openModal } from '../../features/modals/modalsSlice.js';
import AddPlantModal from './AddPlantModal.js';
import './../../styles/css/add-plant-button.css';


export default function Plants() {
  const { data, isError, isLoading, refetch } = useGetUserPlantsQuery();
  const [showAddPlantModal, setShowAddPlantModal] = useState(false);
  const [ deletePlant ] = useDeletePlantMutation();

  const userInfo = useSelector(state => state.auth.userInfo);
  const username = userInfo ? userInfo.username : null;
  
  const handleDelete = (username, plantId) => {
    deletePlant({ username, plantId }).unwrap()
      .then((response) => console.log('Delete successful:', response))
      .catch((error) => console.error('Failed to delete:', error));
  };

  const handleOpenModal = () => {
    setShowAddPlantModal(true);
  };

  const handleCloseModal = () => {
    setShowAddPlantModal(false);
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
        {data?.plants.map((plant, index) => (
          <PlantCard key={index} plant={plant} username={data.username} onDelete={handleDelete}/>
        ))}
      </div>
      <AddPlantModal isOpen={showAddPlantModal} onClose={handleCloseModal} onAddPlant={handleAddPlant} />
    </div>
  );
}
