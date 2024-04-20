import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FileUploader } from "react-drag-drop-files";
import "./../../styles/css/plantForm.css";

const fileTypes = ["JPG", "PNG"];

export default function AddPlantForm() {
  const [formData, setFormData] = useState({
    plantType: "",
    plantImage: "",
    plantLocation: "",
  });
  const [file, setFile] = useState(null);
  const { userInfo } = useSelector((state) => state.auth);

  //   const handleChange = (event) => {
  //     //update state with the form data
  //     const { plantType, plantImage, plantLocation } = event.target;
  //     setFormData({
  //       plantType: plantType,
  //       plantImage: plantImage,
  //       plantLocation: plantLocation,
  //     });
  //   };
  const handleFileChange = (file) => {
    setFile(file);
  };

  const handleChange = (event) => {
    // update state with the form data
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Create new plant submit
  // Will throw error if not authorized
  const handleSubmit = async (e) => {
    e.preventDefault();
    // need connect to db and add this plant to the logged in users list of plants
    try {
      const fileForm = new FormData();
      fileForm.append("file", file);
      fileForm.append("username", userInfo.username);

      console.log("form data", fileForm);
      console.log("file", file);

      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        body: fileForm,
      });
    } catch (err) {
      console.error("Error submitting form");
    }
  };
  return (
    <div className="main-content">
      <div className="main-plant-content">
        <form onSubmit={handleSubmit}>
          <label> Plant Type:</label>
          <input
            type="text"
            id="plantType"
            name="plantType"
            value={formData.plantType}
            onChange={handleChange}
          />

          <br></br>
          <label> Plant Location:</label>
          <input
            type="text"
            id="plantLocation"
            name="plantLocation"
            value={formData.plantLocation}
            onChange={handleChange}
          />
          <br></br>
          <label>Plant Image:</label>
          <FileUploader
            types={fileTypes}
            id="plantImage"
            name="plantImage"
            value={formData.plantImage}
            handleChange={handleFileChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
