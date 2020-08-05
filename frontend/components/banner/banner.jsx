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
      <a className="session-nav-button logout" onClick={logout}>Log Out</a>
    </nav>
  );

  const toggleDrawer = (e) => {
    e.stopPropagation();
    const drawer = document.getElementById("nav-drawer-container");
    const hamburger = document.getElementById("hamburger");
      hamburger.classList.toggle("is-active"); 
      drawer.classList.toggle("is-open");
      document.body.addEventListener("click", closeDrawer);
  };
  
  function closeDrawer(e) {
    e.stopPropagation();
    const drawer = document.getElementById("nav-drawer-container");
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.remove("is-active");
    drawer.classList.remove("is-open");
    document.body.removeEventListener("click", closeDrawer);
  };

  const displayedButtons = currentUser ? userLogout : subscribeLogin;
  
  
  if (bannerType === "form") {
    return(
      <header className="banner-form-style">
        <div>
          <a className="banner-logo-image" href="/">
            <img 
              src={window.myt_logo}
              className="banner-form-logo-image" />
          </a>
        </div>
      </header>
    )
  } else {
    return(
      <header className="banner-full-wrapper">
        <div className="banner-notification">
            <span className="icon-banner-notification" />
          <span className="banner-notification-bold">NEW!</span>
            &nbsp;Easily access your favorite games in the Games menu.
        </div>
        <header className="banner-main-style">
          <div className="nav-drawer-icon-and-logo">
            <button
              id="hamburger"
              className="hamburger hamburger--squeeze" 
              type="button"
              aria-label="Menu" 
              aria-controls="navigation"
              onClick={toggleDrawer}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div id="nav-drawer-container" className="navigation-container">
              <nav className="nav-drawer">
                <h4>Meh Yuck Trials Games</h4>
                <ul>
                  <li>
                    <a href="" className="nav-drawer-link">
                      <span className="icon-nav-drawer icon-puzzle-small" />
                      <span className="nav-drawer-link-text">
                        The Crossword
                      </span>
                    </a>
                    <a href="" className="nav-drawer-link">
                      <span className="icon-nav-drawer" />
                      <span className="nav-drawer-link-text">
                        Statistics
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">
                      <span className="icon-nav-drawer icon-mini-small"/>
                      <span className="nav-drawer-link-text">
                        The Mini
                      </span>
                    </a>
                    <a href="" className="nav-drawer-link">
                      <span className="icon-nav-drawer" />
                      <span className="nav-drawer-link-text">
                        Leaderboards
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">
                      <span className="icon-nav-drawer icon-bee" />
                      <span className="nav-drawer-link-text">
                        Spelling Bee
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">
                      <span className="icon-nav-drawer icon-tiles" />
                      <span className="nav-drawer-link-text">
                        Tiles
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">
                      <span className="icon-nav-drawer icon-letter-boxed" />
                      <span className="nav-drawer-link-text">
                        Letter Boxed
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">
                      <span className="icon-nav-drawer icon-vertex" />
                      <span className="nav-drawer-link-text">
                        Vertex
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">
                      <span className="nav-drawer-link-text">
                        All Games
                      </span>
                    </a>
                  </li>
                </ul>
                <hr/>
                <ul>
                  <li>
                    <a href="" className="nav-drawer-link">Crossword Archives</a>
                  </li>
                </ul>
                <hr/>
                <h4>Other Games</h4>
                <ul>
                  <li>
                    <a href="" className="nav-drawer-link">Sudoku</a>
                  </li>
                </ul>
                <hr/>
                <h4>Tips and Tricks</h4>
                <ul>
                  <li>
                    <a href="" className="nav-drawer-link">Wordnerd, the Crossword Column</a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">How to Solve The Crossword</a>
                  </li>
                </ul>
              </nav>
              <div className="nav-drawer-account-actions">
                {currentUser ? <div>
                  <h4>Profile</h4>
                  <a href="" className="nav-drawer-link">Account Details</a>
                </div> : null}
                {displayedButtons()}
              </div>
            </div>
          </div>
          <div className="banner-main-logo">
            <a href="/">
              <img src={window.main_myt_logo} />
            </a>
          </div>
          {currentUser ? <div>&nbsp;</div> : displayedButtons()}
        </header>
      </header>
    )
  }
}

export default Banner;