import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard.js";

export default function Plants() {
  const [plants, setPlants] = useState([
    { name: "noobplant", status: "healthy", water: "now" },
    { name: "2", status: "healthy", water: "now" },
    { name: "3", status: "healthy", water: "now" },
    { name: "noobp4lant", status: "healthy", water: "now" },
    { name: "noobpla5nt", status: "dead", water: "in 4 hours" },
  ]);

  // Fetch plants on mount
  // useEffect( () => {
  //   try {
  //     // const data = await fetch("http://localhost:3000/api/", {
  //     //   method: "POST",
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     //   body: JSON.stringify(user),
  //     // });
  //     // const userPlants = await data.json();

  //     // setPlants(userPlants);
  //     console.log("Successfully fetched plants: ", plants);
  //   } catch (err) {
  //     console.log("Failed to fetch plants");
  //     console.err(err);
  //   }
  // }, []);
  return (
    <div className = "main-content">
      <h1 className="text-3xl font-bold text-center my-8" >My Plants</h1>
      <div className="border-t border-green-600 my-4"></div>
      <div className="flex flex-wrap justify-center">
        {plants.map((plant, index) => (
          <PlantCard key={index} plant={plant} />
        ))}
      </div>
    </div>
  );
}
