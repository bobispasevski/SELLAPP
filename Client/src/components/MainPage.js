import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="header-section">
        <h1>Buy, Sell, NOW!</h1>
        <div className="buttons-container">
          <button className="sell-button">Sell my car</button>
          <button className="buy-button">Buy a car</button>
        </div>
      </div>
      <div className="posts-section">
        {/* Display created posts for selling cars, trucks, or bikes */}
        {/* You can create separate components for displaying the posts */}
      </div>
    </div>
  );
};

export default MainPage;
