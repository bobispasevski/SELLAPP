import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = () => {
  const [category, setCategory] = useState('car');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [engine, setEngine] = useState('');
  const [power, setPower] = useState('');
  const [type, setType] = useState('');
  const [colour, setColour] = useState('');
  const [pictures, setPictures] = useState([]);
  const [review, setReview] = useState('');
  const [price, setPrice] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleEngineChange = (event) => {
    setEngine(event.target.value);
  };

  const handlePowerChange = (event) => {
    setPower(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleColourChange = (event) => {
    setColour(event.target.value);
  };

  const handleUploadPictures = (event) => {
    const files = event.target.files;
    const imageFiles = [];

    for (let i = 0; i < files.length; i++) {
      // Add logic to check if files[i] is an image file (e.g., using the 'type' property)
      imageFiles.push(files[i]);
    }

    setPictures(imageFiles);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSave = () => {
    // Implement the logic to save the form data to the backend
  };

  return (
    <div className="create-post-container">
      <h2 className="create-post-header">SELL YOUR VEHICLE ON SELLAPP</h2>

      <div className="category-section">
        <h3>Choose what are you selling?</h3>
        <div className="radio-options">
          <label>
            <input
              type="radio"
              value="car"
              checked={category === 'car'}
              onChange={handleCategoryChange}
            />
            Car
          </label>
          <label>
            <input
              type="radio"
              value="truck"
              checked={category === 'truck'}
              onChange={handleCategoryChange}
            />
            Truck
          </label>
          <label>
            <input
              type="radio"
              value="bike"
              checked={category === 'bike'}
              onChange={handleCategoryChange}
            />
            Bike
          </label>
        </div>
      </div>

      <div className="form-section">
        <h3>Vehicle Information</h3>
        <div className="form-input">
          <label>Brand</label>
          <input type="text" value={brand} onChange={handleBrandChange} />
        </div>
        <div className="form-input">
          <label>Model</label>
          <input type="text" value={model} onChange={handleModelChange} />
        </div>
        <div className="form-input">
          <label>Year</label>
          <input type="number" value={year} onChange={handleYearChange} />
        </div>
        <div className="form-input">
          <label>Engine</label>
          <input type="text" value={engine} onChange={handleEngineChange} />
        </div>
        <div className="form-input">
          <label>Power (hp)</label>
          <input type="number" value={power} onChange={handlePowerChange} />
        </div>
        <div className="form-input">
          <label>Type</label>
          <input type="text" value={type} onChange={handleTypeChange} />
        </div>
        <div className="form-input">
          <label>Colour</label>
          <input type="text" value={colour} onChange={handleColourChange} />
        </div>
      </div>

      <div className="picture-upload-section">
        <h3>Upload Pictures</h3>
        <div className="picture-upload">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUploadPictures}
          />
          <label className="upload-button">Upload</label>
        </div>
      </div>

      <div className="review-section">
        <h3>Vehicle Review</h3>
        <textarea
          rows="5"
          value={review}
          onChange={handleReviewChange}
        />
      </div>

      <div className="price-section">
        <h3>Price</h3>
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
        />
      </div>

      <button onClick={handleSave} className="save-button">
        Save
      </button>
    </div>
  );
};

export default CreatePost;
