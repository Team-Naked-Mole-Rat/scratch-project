import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
  useAddPlantMutation,
  useGetUserPlantsQuery,
} from "../../features/api/http_plantsApiSlice.js";
import "./../../styles/css/plantForm.css";

const fileTypes = ["JPG", "PNG"];

export default function AddPlantForm({ onClose }) {
  const { data, isError, isLoading } = useGetUserPlantsQuery;
  const [ formData, setFormData ] = useState({
    plantName: "",
    plantWateringInstructions: "",
    plantFertilizeInstructions: "",
    plantSunlight: "",
    plantLocation: "",
    plantFavFlag: false,
  });
  const [imageData, setImageData] = useState(null);
  const [addPlant] = useAddPlantMutation();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (imageData) => {
    setImageData(imageData);
    console.log("File selected:", imageData); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("File data before form submission:", imageData);

    const fileForm = new FormData();
    fileForm.append("imageData", imageData);
    fileForm.append("plantName", formData.plantName);
    fileForm.append(
      "plantWateringInstructions",
      formData.plantWateringInstructions
    );
    fileForm.append(
      "plantFertilizeInstructions",
      formData.plantFertilizeInstructions
    );
    fileForm.append("plantSunlight", formData.plantSunlight);
    fileForm.append("plantLocation", formData.plantLocation);
    fileForm.append("plantFavFlag", formData.plantFavFlag);

    console.log("FormData contents:", Object.fromEntries(fileForm.entries()));

    try {
      const result = await addPlant(fileForm).unwrap();

      console.log("Successfully added the plant:", result);
      onClose();
    } catch (err) {
      console.error("Error submitting form", err);
      console.log("Error details:", err.response?.data || err.message);
    }
  };
  return (
    <div className="main-content">
      <div className="main-plant-content">
        <form onSubmit={handleSubmit}>
          <div className="font-bold text-xl mb-2 text-gray-700">
            Add a New Plant
          </div>

          <label>Plant Name:</label>
          <input
            className="border rounded py-2 px-4 mb-4 w-full"
            type="text"
            id="plantName"
            name="plantName"
            value={formData.plantName}
            onChange={handleChange}
            placeholder="Enter the plant's name"
          />

          <div className="flex items-center space-x-2">
            <input
              className="align-middle"
              type="checkbox"
              id="plantFavFlag"
              name="plantFavFlag"
              checked={formData.plantFavFlag}
              onChange={handleChange}
            />

            <label htmlFor="plantFavFlag">Add to favorites:</label>
          </div>

          <label>Plant Needs:</label>
          <input
            className="border rounded py-2 px-4 mb-4 w-full"
            type="text"
            id="plantWateringInstructions"
            name="plantWateringInstructions"
            value={formData.plantWateringInstructions}
            onChange={handleChange}
            placeholder="Describe watering needs"
          />

          <input
            className="border rounded py-2 px-4 mb-4 w-full"
            type="text"
            id="plantFertilizeInstructions"
            name="plantFertilizeInstructions"
            value={formData.plantFertilizeInstructions}
            onChange={handleChange}
            placeholder="Provide fertilizing instructions"
          />

          <input
            className="border rounded py-2 px-4 mb-4 w-full"
            type="text"
            id="plantSunlight"
            name="plantSunlight"
            value={formData.plantSunlight}
            onChange={handleChange}
            placeholder="Required sunlight exposure"
          />

          <input
            className="border rounded py-2 px-4 mb-4 w-full"
            type="text"
            id="plantLocation"
            name="plantLocation"
            value={formData.plantLocation}
            onChange={handleChange}
            placeholder="Plant location in home/garden"
          />

          <label>Plant Image:</label>
          <FileUploader
            className="mb-4"
            types={fileTypes}
            id="plantImage"
            name="plantImage"
            handleChange={handleFileChange}
          />
          <button className="register form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}