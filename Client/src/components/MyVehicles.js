import React from 'react';
import './MyVehicles.css';
import MyVehicle from './MyVehicle';

const MyVehicles = ({ vehicles }) => {
  return (
    <div className="my-vehicles-container">
      <h2>My Vehicles</h2>
      <div className="vehicle-list">
        {vehicles.map((vehicle) => (
          <MyVehicle key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default MyVehicles;
