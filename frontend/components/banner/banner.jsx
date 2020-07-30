import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ currentUser, logout }) => {

  const subscribeLogin = () => (

    <nav className="user-nav-button-container">
      <Link to="/subscribe" className="subscribe-button">Subscribe</Link>
      <Link to="/login" className="login-button">Log In</Link>
    </nav>
  );

  const userLogout = () => (
    <nav className="user-nav-button-container">
      <button className="logout-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? userLogout() : subscribeLogin()
  
}

export default Banner;