import React from 'react';
import './MyProfile.css';
import { Link, useNavigate } from 'react-router-dom';

const MyProfile = () => {
  // Replace these with actual user data
  const username = 'JohnDoe';
  const email = 'johndoe@example.com';

  // Replace this with actual data from your backend once it's ready
  const vehicles = [
    {
      id: 1,
      name: 'Car 1',
      image: 'path-to-car-1-image.png',
    },
    {
      id: 2,
      name: 'Car 2',
      image: 'path-to-car-2-image.png',
    },
    // Add more vehicles here
  ];

  const navigate = useNavigate();

  const handleSellCar = () => {
    // Perform any additional actions before navigating to '/createpost' if needed
    navigate('/createpost');
  };

  return (
    <div className="my-profile-container">
      <div className="basic-info">
        <h2>{username}</h2>
        <p>{email}</p>
        <button onClick={handleSellCar} className="sell-car-button">
          Sell my car
        </button>
      </div>
      <div className="my-vehicles">
        <h2>My Vehicles</h2>
        <div className="vehicle-list">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-item">
              <img src={vehicle.image} alt={vehicle.name} />
              <p>{vehicle.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
