import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ currentUser, logout }) => {

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

  const displayedForm = currentUser ? userLogout() : subscribeLogin();

  return( 
    <header>
      <div>H</div>
      <a className="banner-logo-image" href="/">
        <img src={window.myt_logo} />
      </a>
  
      {displayedForm}
    </header>


  )
}

export default Banner;