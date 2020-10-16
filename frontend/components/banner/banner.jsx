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
    hamburger.addEventListener("click", closeDrawer);
  };
  
  const closeDrawer = (e) => {
    e.stopPropagation();
    const drawer = document.getElementById("nav-drawer-container");
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.remove("is-active");
    drawer.classList.remove("is-open");
    hamburger.removeEventListener("click", closeDrawer);
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
          <span className="icon-banner-notification arrow" />
          <span className="banner-notification-bold">NEW!</span>
            &nbsp;Easily access your favorite games in the Games menu.
          <span className="icon-banner-notification bee" />
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
                <h4>Mad Year Times Games</h4>
                <ul>
                  <li>
                    <a href="" className="nav-drawer-link wordcross-link">
                      <span className="icon-nav-drawer icon-puzzle-small" />
                      <span className="nav-drawer-link-text">
                        The Wordcross
                      </span>
                    </a>
                    <a href="" className="nav-drawer-link no-icon stats-link">
                      <span className="icon-nav-drawer" />
                      <span className="nav-drawer-link-text">
                        Statistics
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link mini-link">
                      <span className="icon-nav-drawer icon-mini-small"/>
                      <span className="nav-drawer-link-text">
                        The Micro
                      </span>
                    </a>
                    <a href="" className="nav-drawer-link no-icon leaderboards-link">
                      <span className="icon-nav-drawer" />
                      <span className="nav-drawer-link-text">
                        Leaderboards
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link word-wasp-link">
                      <span className="icon-nav-drawer icon-word-wasp" />
                      <span className="nav-drawer-link-text">
                        Word Wasp
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link linoleum-link">
                      <span className="icon-nav-drawer icon-linoleum" />
                      <span className="nav-drawer-link-text">
                        Linoleum
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link ricochet-link">
                      <span className="icon-nav-drawer icon-ricochet" />
                      <span className="nav-drawer-link-text">
                        Ricochet
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link nexus-link">
                      <span className="icon-nav-drawer icon-nexus" />
                      <span className="nav-drawer-link-text">
                        Nexus
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link all-games-link">
                      <span className="nav-drawer-link-text">
                        All Games
                      </span>
                    </a>
                  </li>
                </ul>
                <hr/>
                <ul>
                  <li>
                    <a href="" className="nav-drawer-link archives-link">
                      Wordcross Archives
                    </a>
                  </li>
                </ul>
                <hr/>
                <h4>Other Games</h4>
                <ul>
                  <li>
                    <a href="" className="nav-drawer-link sudoku-link">
                      Sudoku
                    </a>
                  </li>
                </ul>
                <hr/>
                <h4>Tips and Tricks</h4>
                <ul>
                  <li>
                    <a href="" className="nav-drawer-link wordnerd-link">
                      Wordnerd, the Wordcross Column
                    </a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link how-to-solve-link">
                      How to Solve The Wordcross
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="nav-drawer-account-actions">
                {currentUser ? 
                  <div>
                    <h4>Profile</h4>
                    <a href="" className="nav-drawer-link account-details-link">
                      Account Details
                    </a>
                  </div> : 
                  null
                }
                {displayedButtons()}
              </div>
            </div>
          </div>
          <div className="banner-main-logo">
            <a href="/">
              <img src={window.main_myt_logo} />
            </a>
          </div>
          <div className="top-banner-account-actions">{currentUser ? <div>&nbsp;</div> : displayedButtons()}</div>
        </header>
      </header>
    )
  }
}

export default Banner;