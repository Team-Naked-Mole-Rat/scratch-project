import React, { useState } from "react";
import PlantCard from "./PlantCard.js";
import { useGetUserPlantsQuery } from "../../features/api/plantsApiSlice.js";
import { openModal } from '../../features/modals/modalsSlice.js';
import AddPlantModal from './AddPlantModal.js';

export default function Plants() {
  const { data, isError, isLoading } = useGetUserPlantsQuery();
  const [showAddPlantModal, setShowAddPlantModal] = useState(false);

  const handleOpenModal = () => {
    setShowAddPlantModal(true);
  };

  const handleCloseModal = () => {
    setShowAddPlantModal(false);
  };

  if (isError) {
    return <h1>Error fetching user plants</h1>;
  }

  if (isLoading) {
    return <h1>Loading user plants...</h1>;
  }

  return (
    <div className="main-content">
      <h1 className="text-3xl font-bold text-center my-8">My Plants</h1>
      <button onClick={handleOpenModal} className="add-plant-button">Add a Plant</button>
      <div className="border-t border-green-600 my-4"></div>
      <div className="flex flex-wrap justify-center">
        {data?.plants.map((plant, index) => (
          <PlantCard key={index} plant={plant} />
        ))}
      </div>
      <AddPlantModal isOpen={showAddPlantModal} onClose={handleCloseModal} />
    </div>
  );
}
