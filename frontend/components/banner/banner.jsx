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
      <h2>Current User: {currentUser.email} (for test purposes only)</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return(
    <div>
      <div>
        
      </div>
      <div>
        <a href="/" class="page-header-logo-link">
          Logo goes here!
        </a>
      </div>
      <div>
        {currentUser ? userLogout() : subscribeLogin()}
      </div>
    </div>)
}

export default Banner;