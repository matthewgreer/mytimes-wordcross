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
          <div>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M10 4C10 3.44772 9.55228 3 9 3C8.44772 3 8 3.44772 8 4L10 4ZM8.29289 17.7071C8.68342 18.0976 9.31658 18.0976 9.70711 17.7071L16.0711 11.3431C16.4616 10.9526 16.4616 10.3195 16.0711 9.92893C15.6805 9.53841 15.0474 9.53841 14.6569 9.92893L9 15.5858L3.34315 9.92893C2.95262 9.53841 2.31946 9.53841 1.92893 9.92893C1.53841 10.3195 1.53841 10.9526 1.92893 11.3431L8.29289 17.7071ZM8 4L8 17L10 17L10 4L8 4Z" fill="black" />
              </svg>
            </i>
          </div>
          NEW! Easily access your favorite games in the Games menu.
        </div>
        <header className="banner-main-style">
          <div className="nav-drawer-icon-and-logo">
              <button
                className="hamburger hamburger--squeeze" 
                type="button"
                aria-label="Menu" 
                aria-controls="navigation"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            <div id="nav-drawer-container" className="navigation-container drawer-open">
              <nav className="nav-drawer">
                <h4>Meh Yuck Trials Games</h4>
                <ul>
                  <li>
                    <i>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.28406 3.46888V6.75196H6.80157V2.28406H3.46888C3.15465 2.28406 2.85328 2.40889 2.63108 2.63108C2.40889 2.85328 2.28406 3.15465 2.28406 3.46888Z" fill="white" />
                      <path d="M13.2101 17.7159H16.5311C16.6075 17.7149 16.6837 17.7071 16.7587 17.6925C16.9852 17.6444 17.1929 17.5319 17.357 17.3686C17.5787 17.1462 17.7035 16.8451 17.7042 16.5311V13.2013H13.2101V17.7159Z" fill="white" />
                      <path d="M12.2967 13.2013H7.7179V17.7159H12.2967V13.2013Z" fill="white" />
                      <path d="M17.713 7.66833H13.2101V12.2471H17.713V7.66833Z" fill="white" />
                      <path d="M12.2967 2.28406H7.7179V6.75196H12.2967V2.28406Z" fill="white" />
                      <path d="M6.80157 7.66833H2.28406V12.2471H6.80157V7.66833Z" fill="white" />
                      <path d="M18.2821 2.2228C18.1962 2.10685 18.0984 2.00024 17.9903 1.9047C17.6251 1.55876 17.1499 1.35217 16.6479 1.32104C16.6041 1.32104 16.5632 1.32104 16.5195 1.32104H3.46888C3.42511 1.32104 3.38425 1.32104 3.34048 1.32104C2.79284 1.35235 2.27793 1.59199 1.90135 1.99082C1.52476 2.38965 1.31504 2.91746 1.31519 3.46599V16.5341C1.31596 17.1043 1.5428 17.6509 1.94599 18.0541C2.34917 18.4572 2.89578 18.6841 3.46596 18.6849H16.5341C17.1045 18.6833 17.6511 18.4558 18.0542 18.0522C18.4573 17.6485 18.6841 17.1016 18.6848 16.5312V3.4689C18.6838 3.02171 18.543 2.58603 18.2821 2.2228ZM6.80157 12.2442H2.28406V7.66832H6.80157V12.2442ZM6.80157 6.75198H2.28406V3.4689C2.28406 3.15467 2.40889 2.85331 2.63108 2.63111C2.85328 2.40891 3.15465 2.28408 3.46888 2.28408H6.80157V6.75198ZM12.2967 17.716H7.71207V13.2014H12.2967V17.716ZM12.2967 6.75198H7.71207V2.28408H12.2967V6.75198ZM17.716 16.5312C17.7152 16.8452 17.5904 17.1463 17.3687 17.3687C17.2014 17.534 16.9894 17.6466 16.7588 17.6926C16.6799 17.7079 16.5998 17.7157 16.5195 17.716H13.2101V13.2014H17.716V16.5312ZM17.716 12.2442H13.2101V7.66832H17.716V12.2442Z" fill="black" />
                      </svg>
                    </i>
                    <a href="" className="nav-drawer-link">The Crossword</a>
                    <a href="" className="nav-drawer-link">Statistics</a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">
                      <i>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.5312 2.28405H10.6946L17.7277 9.31713V3.48055C17.7292 3.32299 17.6993 3.1667 17.6398 3.02083C17.5802 2.87496 17.4921 2.74244 17.3807 2.63102C17.2693 2.51961 17.1367 2.43153 16.9909 2.37195C16.845 2.31238 16.6887 2.28249 16.5312 2.28405Z" fill="#6493E6" />
                          <path d="M17.716 16.5311V10.5953L10.5953 17.716H16.5311C16.6887 17.7188 16.8453 17.6911 16.9922 17.6342C17.2082 17.5422 17.3921 17.3884 17.5208 17.1921C17.6496 16.9958 17.7175 16.7659 17.716 16.5311Z" fill="#6493E6" />
                          <path d="M2.28406 3.46888V9.32589L9.32589 2.28406H3.46888C3.15606 2.28858 2.85731 2.41486 2.63609 2.63609C2.41486 2.85731 2.28858 3.15606 2.28406 3.46888Z" fill="#6493E6" />
                          <path d="M2.28406 16.5312C2.28406 16.8454 2.40889 17.1468 2.63108 17.369C2.85328 17.5912 3.15465 17.716 3.46888 17.716H9.41343L2.28406 10.5866V16.5312Z" fill="#6493E6" />
                          <path d="M10.0029 2.97967L6.69714 6.28546L10.0029 9.59125L13.3087 6.28546L10.0029 2.97967Z" fill="white" />
                          <path d="M10.0031 10.3223L6.69727 13.6281L10.0031 16.9339L13.3089 13.6281L10.0031 10.3223Z" fill="white" />
                          <path d="M16.5311 1.31519H3.46888C2.89819 1.31519 2.35083 1.54169 1.94702 1.94496C1.54321 2.34822 1.31596 2.89527 1.31519 3.46596V16.5341C1.31596 17.1042 1.5428 17.6509 1.94599 18.054C2.34917 18.4572 2.89578 18.6841 3.46596 18.6848H16.5341C17.1045 18.6833 17.6511 18.4558 18.0542 18.0522C18.4573 17.6485 18.6841 17.1016 18.6848 16.5311V3.46888C18.6841 2.89792 18.4569 2.35057 18.0532 1.94684C17.6494 1.54311 17.1021 1.31596 16.5311 1.31519ZM10.0029 2.97861L13.3093 6.28503L10.0029 9.59145L6.69651 6.28503L10.0029 2.97861ZM2.28406 3.46888C2.28858 3.15606 2.41486 2.85731 2.63609 2.63609C2.85731 2.41486 3.15606 2.28858 3.46888 2.28406H9.32589L2.28406 9.32589V3.46888ZM9.41343 17.716H3.46888C3.15465 17.716 2.85328 17.5911 2.63108 17.3689C2.40889 17.1467 2.28406 16.8454 2.28406 16.5311V10.5866L9.41343 17.716ZM9.99709 16.9339L6.69943 13.6304L10.0029 10.3385L13.3093 13.6304L10.0029 16.9339H9.99709ZM17.7101 16.5311C17.7122 16.7652 17.6451 16.9947 17.5175 17.1909C17.3898 17.3871 17.2071 17.5413 16.9922 17.6343C16.8461 17.6951 16.6894 17.7268 16.5311 17.7276H10.5953L17.716 10.607L17.7101 16.5311ZM17.7101 9.31713L10.6829 2.28406H16.5195C16.8337 2.28406 17.1351 2.40889 17.3573 2.63108C17.5795 2.85328 17.7043 3.15465 17.7043 3.46888L17.7101 9.31713Z" fill="black" />
                          <path d="M16.5311 2.28406C16.8454 2.28406 17.1467 2.40889 17.3689 2.63108C17.5911 2.85328 17.716 3.15465 17.716 3.46888V9.30546V3.46888C17.716 3.15465 17.5911 2.85328 17.3689 2.63108C17.1467 2.40889 16.8454 2.28406 16.5311 2.28406Z" fill="black" />
                          <path d="M17.7159 16.5311C17.7175 16.7659 17.6496 16.9958 17.5208 17.1921C17.392 17.3884 17.2081 17.5422 16.9922 17.6342C17.2063 17.543 17.389 17.3909 17.5176 17.197C17.6462 17.003 17.7152 16.7756 17.7159 16.5428V10.5953V16.5311Z" fill="black" />
                          <path d="M9.32589 2.28406L2.28406 9.32589L9.32589 2.28406H3.46888C3.28271 2.28558 3.0996 2.3316 2.93484 2.4183C3.0996 2.3316 3.28271 2.28558 3.46888 2.28406H9.32589Z" fill="black" />
                          <path d="M2.28406 10.5866L9.41343 17.716L2.28406 10.5866Z" fill="black" />
                          <path d="M10.0059 9.59142L13.3123 6.285L10.0059 2.97858L13.3094 6.285L10.0059 9.59142Z" fill="black" />
                          <path d="M13.3094 13.6275L10.0059 10.324L13.3094 13.6275L10.0059 16.9339L13.3094 13.6275Z" fill="black" />
                        </svg>
                      </i>
                      The Mini
                    </a>
                    <a href="" className="nav-drawer-link">Leaderboards</a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">Spelling Bee</a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">Tiles</a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">Letter Boxed</a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">Vertex</a>
                  </li>
                  <li>
                    <a href="" className="nav-drawer-link">All Games</a>
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
                <ul>
                  <li>
                    <a href="" className="nav-drawer-link">Wordplay, the Crossword Column</a>
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
            <img src={window.main_myt_logo} />
          </div>
          {currentUser ? <div>&nbsp;</div> : displayedButtons()}
        </header>
      </header>
    )
  }
}

export default Banner;