import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard.js";
import { useGetUserPlantsQuery } from "../../features/api/plantsApiSlice.js";

export default function Plants() {
  const { data, isError, isLoading } = useGetUserPlantsQuery();
  const [ plants, setPlants ] = useState([
    {
      username: "user a",
      plantname: "Rose",
      plant_status: "healthy",
      plant_instruction: "Please add more water",
      plant_reminder: "water every 2 days",
      fav_flag: true,
    },
    {
      username: "user a",
      plantname: "Tulip",
      plant_status: "healthy",
      plant_instruction: "test",
      plant_reminder: null,
      fav_flag: true,
    },
  ]);

  if(isError) {
    return <h1>Error fetching user plants</h1>
  }

  if(isLoading) {
    return <h1>Loading user plants...</h1>
  }

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
    <div className="main-content">
      <h1 className="text-3xl font-bold text-center my-8">My Plants</h1>
      <div className="border-t border-green-600 my-4"></div>
      <div className="flex flex-wrap justify-center">
        Local plants
        {plants.map((plant, index) => (
          <PlantCard key={index} plant={plant} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        Fetched plants
        {data?.plants.map((plant, index) => (
          <PlantCard key={index} plant={plant} />
        ))}
      </div>
    </div>
  );
}
