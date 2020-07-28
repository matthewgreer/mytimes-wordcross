import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  const subscribeLogin = () => (
    <nav className="subscribe-login">
      <Link to="/subscribe">Subscribe</Link>
      <Link to="/login">Log In</Link>
    </nav>
  );

  const currentUserNav = () => (
    <nav className="current-user-nav">
      <h2>Current User: {currentUser.email} (for test purposes only)</h2>
      <button className="nav-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? currentUserNav() : subscribeLogin();

}

export default Greeting;