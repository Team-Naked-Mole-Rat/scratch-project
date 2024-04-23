import React, { useEffect} from "react";
import { useSelector } from 'react-redux';
import { plantsSelectors } from '../../features/plants/plantsSlice.js';
import '../../styles/css/public_PlantCard.css'

const PlantCard = ({ plant, username, onDelete }) => {
  const visibilityState = useSelector(state => state.plants.visibilityPlantIds[plant.plantid] || 'normal');

  useEffect(() => {
    console.log(`Visibility State Changed for ${plant.plantid}: ${visibilityState}`);
  }, [visibilityState]);

  const visibilityClass =  {
    'normal' : '',
    'optimisticOpacity' : 'opacity-50 transition-opacity duration-2000 ease-in-out',
    'optimisticDelete' : 'opacity-0 transition-opacity duration-2000 ease-in-out'
  }[visibilityState];

  if (visibilityState === 'optimisticDelete') {
    return null; 
  }

  return (
    <div className={`plant-card ${visibilityClass}`}>
      <button onClick={() => onDelete(plant.username, plant.plantid)}>X</button>
      <div className="image-container">
          <img
              src={plant.plant_filename ? `http://localhost:3000/images/${plant.plant_filename}` : "http://localhost:3000/images/defaultimg.png"}
              alt={plant.plantname}
          />
      </div>
      <div>
        <div className="text-xl">
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
