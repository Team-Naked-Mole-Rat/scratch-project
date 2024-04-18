import React from "react";

const PlantCard = (plant) => {
  return (
    <div className="bg-white max-w-md mx-auto rounded overflow-hidden shadow-md m-4">
      {/* <img
        className="w-full h-64 object-cover"
        src={plant.img}
        alt={plant.name}
      /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{plant.name}</div>
        <p className="text-gray-700">{plant.status}</p>
        <p className="text-gray-700">Next water: {plant.water}</p>
      </div>
    </div>
    // <div className={`${styles.card}`}>
    //   <img src={img} alt={plant.name} />
    //   <div className={`${styles.card - info}`}>
    //     <div className={`${styles.card - header}`}>{plant.name}</div>
    //   </div>
    // </div>
  );
};

export default PlantCard;
