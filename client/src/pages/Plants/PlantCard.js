import React from "react";

const PlantCard = ({ plant, username, onDelete }) => {
  console.log('plant: ', plant);
  return (
    <div className="bg-white/90 max-w-md mx-auto rounded overflow-hidden shadow-md m-4">
      <img
        className="w-full h-64 object-cover"
        src={plant.plant_filename ? `http://localhost:3000/images/${plant.plant_filename}` : "http://localhost:3000/images/defaultimg.png"}
        alt={plant.plantname}
      />
      <div className="px-6 py-4">
        <button className="" onClick={() => onDelete(username, plant.id)}>X</button>
        <div
          className={`font-bold text-xl mb-2 ${
            plant.fav_flag ? "text-yellow-300" : "text-gray-700"
          }`}
        >
          {plant.plantname}
        </div>
        <p className="text-gray-700">Status: {plant.plant_status}</p>
        <p className="text-gray-700">Next water: {plant.plant_reminder}</p>
        <p className="text-gray-700">Diagnosis: {plant.plant_instruction}</p>

      </div>
    </div>
  );
};

export default PlantCard;
