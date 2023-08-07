import React from 'react';
import './Product.css';

const Product = () => {
  // Replace this with actual data for a specific vehicle
  const vehicle = {
    brand: 'Brand',
    model: 'Model',
    year: '2023',
    engine: '2.0L',
    power: '200hp',
    type: 'SUV',
    color: 'Red',
    pictures: [
      'path-to-picture-1.png',
      'path-to-picture-2.png',
      // Add more picture paths here
    ],
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.',
    price: '$30,000',
  };

  return (
    <div className="product-container">
      <h2 className="product-title">{vehicle.brand} {vehicle.model}</h2>
      <div className="product-details">
        <div className="product-image">
          <img src={vehicle.pictures[0]} alt={vehicle.brand} />
          {/* You can create a gallery for all pictures here */}
        </div>
        <div className="product-info">
          <p><strong>Year:</strong> {vehicle.year}</p>
          <p><strong>Engine:</strong> {vehicle.engine}</p>
          <p><strong>Power:</strong> {vehicle.power}</p>
          <p><strong>Type:</strong> {vehicle.type}</p>
          <p><strong>Color:</strong> {vehicle.color}</p>
          <p><strong>Price:</strong> {vehicle.price}</p>
        </div>
      </div>
      <div className="product-review">
        <h3>Review</h3>
        <p>{vehicle.review}</p>
      </div>
      {/* You can create a gallery with all pictures here */}
    </div>
  );
};

export default Product;
