import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ currentUser, logout }) => {

  const subscribeLogin = () => (
    <nav className="subscribe-login">
      <Link to="/subscribe" className="subscribe-button">Subscribe</Link>
      <Link to="/login" className="login-button">Log In</Link>
    </nav>
  );

  const userLogout = () => (
    <nav className="user-logout">
      <h2>Current User: {currentUser.email} (for test purposes only)</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? userLogout() : subscribeLogin();

}

export default Banner;