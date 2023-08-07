import React from 'react';
import './CreateAcc.css';

const CreateAcc = () => {
  return (
    <div className="signup-container">
      <h2 className="signup-title">Create an Account</h2>
      <button className="google-button">Continue with Google</button>
      <form className="signup-form">
      <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button className="signup-button">Create Account</button>
        <p className="login-link">Already have an account? <a href="/login">Log in</a></p>
      </form>
    </div>
  );
};

export default CreateAcc;
