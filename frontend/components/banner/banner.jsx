import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ currentUser, bannerType, logout }) => {

  const subscribeLogin = () => (
    <nav className="user-nav-button-container">
      <Link to="/subscribe" className="session-nav-button subscribe">Subscribe</Link>
      <Link to="/login" className="session-nav-button login">Log In</Link>
    </nav>
  );
  
  const userLogout = () => (
    <nav className="user-nav-button-container">
      <button className="logout-button" onClick={logout}>Log Out</button>
    </nav>
  );
  
  const displayedButtons = currentUser ? userLogout : subscribeLogin;
  
  
  if (bannerType === "form") {
    return(
      <header className="banner-form-style">
        <div>
          <a className="banner-logo-image" href="/">
            <img src={window.myt_logo} />
          </a>
        </div>
      </header>
    )
  } else {
    return(
      <header className="banner-main-style">
        <div className="nav-drawer-icon-and-logo">
          {/* Placeholder for Hamburger (Nav component) and Logo */}
          T | Games
        </div>
        <div>
          {displayedButtons()}
        </div>
      </header>
    )
  }
}

export default Banner;