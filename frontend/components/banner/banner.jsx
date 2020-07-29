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

  return(
    <header className="header-messaging-buffer">
      <div>
        <div>
          {/* nav drawer container component */}
          Nav Drawer Hamburger goes here!
        </div>
        <div className="header-branding">
          <a href="/" class="page-header-logo-link">
            Logo goes here!
          </a>
        </div>
        <div>
          {currentUser ? userLogout() : subscribeLogin()}
        </div>
      </div>
    </header>
    )
}

export default Banner;