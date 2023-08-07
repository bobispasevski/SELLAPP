import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Log in to your account</h2>
      <button className="google-button">Continue with Google</button>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="username" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="remember-me">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button className="login-button">Log in</button>
        <div className="forgot-signup">
        <Link to="/createacc" className="signup-button">
            Sign up
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
