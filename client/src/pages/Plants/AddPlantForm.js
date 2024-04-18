import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG'];

export default function AddPlantForm() {
  const [formData, setFormData] = useState({
    plantType: '',
    plantImage: '',
    plantLocation: '',
  });
  const [file, setFile] = useState(null);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // need connect to db and add this plant to the logged in users list of plants

    console.log('form data', formData);
    console.log('file', file);
  };
  return (
    <div className="main-content">
      <h1>Add A Plant </h1>
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
  );
}
