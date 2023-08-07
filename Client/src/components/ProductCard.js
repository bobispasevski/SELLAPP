import React from 'react';
import './ProductCard.css';

const vehicle = {
    brand: 'Brand',
    model: 'Model',
    price: '9999',
    image:  'https://www.netcarshow.com/Ford-Mustang_Shelby_GT500KR-2008-1024-02.jpg'
}


const ProductCard = () => {
  return (
    
    <div className="product-card">
      <div className="product-image">
        <img src={vehicle.image} alt={vehicle.brand} />
      </div>
      <div className="product-details">
        <h3>{vehicle.brand} {vehicle.model}</h3>
        <p className="product-price">{vehicle.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
