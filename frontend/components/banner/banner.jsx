import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ currentUser, logout }) => {

  const subscribeLogin = () => (
    <nav className="banner-button">
      <Link to="/subscribe" className="subscribe-button">Subscribe</Link>
      <Link to="/login" className="login-button">Log In</Link>
    </nav>
  );

  const userLogout = () => (
    <nav className="banner-button">
      <button className="logout-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return (
    <div className="header-wrapper">
      <div className="header-messaging-wrapper">
        <div className="leaderboard-promo-banner"></div>
        <div className="messaging-banner"></div>
        <div className="header-messaging-buffer"></div>
      </div>
      <div className="header-buffer">
        <div className="page-header">
          <h2>Current User: {currentUser.email} (for test purposes only)</h2>
          <div>
            <a href="/" class="page-header-logo-link">
              Logo goes here! {/* className="page-header-logo-image"  */}
            </a>
          </div>
          <div className="user-button-container">
            {currentUser ? userLogout() : subscribeLogin()}
          </div>
        </div>
      </div>
      <div className="leaderboard-promo-banner-mobile"></div>
    </div>
  )
}

export default Banner;