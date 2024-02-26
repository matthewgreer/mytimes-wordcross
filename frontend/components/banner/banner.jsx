import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../wordcross/wordcross_header/modal/modal';
import wordcrossDateInfo from '../body/wordcross_date_info';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalType: 'none'
    }

    this.dateInfo = wordcrossDateInfo();

    this.subscribeLogin = this.subscribeLogin.bind(this);
    this.userLogout = this.userLogout.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.handleModalButtonClick = this.handleModalButtonClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.displayedButtons = this.displayedButtons.bind(this);
  };

  subscribeLogin() {
    return (
      <nav className="user-nav-button-container">
        <Link to="/subscribe" className="session-nav-button subscribe">Subscribe</Link>
        <Link to="/login" className="session-nav-button login">Log In</Link>
      </nav>
    );
  };

  userLogout() {
    return (
      <nav className="user-nav-button-container">
        <a className="session-nav-button logout"
          onClick={this.props.logout}
        >
          Log Out
        </a>
      </nav>
    );
  };

  toggleDrawer(e) {
    e.stopPropagation();
    const drawer = document.getElementById("nav-drawer-container");
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("is-active");
    drawer.classList.toggle("is-open");
    return hamburger.addEventListener("click", this.closeDrawer);
  };

  closeDrawer(e) {
    e.stopPropagation();
    const drawer = document.getElementById("nav-drawer-container");
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.remove("is-active");
    drawer.classList.remove("is-open");
    return hamburger.removeEventListener("click", this.closeDrawer);
  };

  handleModalButtonClick() {
    this.setState({
      modalType: 'none'
    });
  };

  showModal() {
    this.setState({
      modalType: 'dummyLink'
    });
  };

  displayedButtons() {
    return (
      this.props.currentUser ? this.userLogout() : this.subscribeLogin()
    )
  };


  render() {
    if (this.props.bannerType === "form") {
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
          {this.props.currentUser ?
            null :
            <div className="banner-notification">
              <span className="icon-banner-notification arrow" />
              <span className="banner-notification-bold">NEW!</span>
              &nbsp;Easily access your favorite games in the Games menu.
              <span className="icon-banner-notification word-wasp" />
            </div>
          }
          <header className="banner-main-style">
            <div className="nav-drawer-icon-and-logo">
              <button
                id="hamburger"
                className="hamburger hamburger--squeeze"
                type="button"
                aria-label="Menu"
                aria-controls="navigation"
                onClick={this.toggleDrawer}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <div
                id="nav-drawer-container"
                className={
                  this.props.currentUser ?
                  "navigation-container no-notification-above" :
                  "navigation-container has-notification-above"
                }
              >
                <nav className="nav-drawer">
                  <h4>Mad Year Times Games</h4>
                  <ul>
                    <li>
                      <Link
                        to={`/daily/${this.dateInfo.dailyDate}`}
                        className="nav-drawer-link wordcross-link"
                      >
                        <span className="icon-nav-drawer icon-wordcross-small" />
                        <span className="nav-drawer-link-text">
                          The Wordcross
                        </span>
                      </Link>
                      { this.props.currentUser ? <Link
                        to={`/user/${this.props.currentUser.id}/user_stats`}
                        className="nav-drawer-link no-icon stats-link"
                      >
                        <span className="icon-nav-drawer" />
                        <span className="nav-drawer-link-text">
                          Statistics
                        </span>
                      </Link> :
                      <a
                        /* href="" */
                        className="nav-drawer-link no-icon stats-link"
                        >
                          <span className="icon-nav-drawer" />
                          <span className="nav-drawer-link-text coming-soon">
                            Statistics - Coming Soon!
                          </span>
                        </a> }
                    </li>
                    <li>
                      <Link
                        to={`/micro/${this.dateInfo.microDate}`}
                        className="nav-drawer-link micro-link"
                      >
                        <span className="icon-nav-drawer icon-micro-small"/>
                        <span className="nav-drawer-link-text">
                          The Micro
                        </span>
                      </Link>
                      <a
                        /* href="" */
                        className="nav-drawer-link no-icon leaderboards-link"
                      >
                        <span className="icon-nav-drawer" />
                        <span className="nav-drawer-link-text coming-soon">
                          Leaderboards - Coming Soon!
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        /* href="" */
                        className="nav-drawer-link word-wasp-link"
                        onClick={this.showModal}
                      >
                        <span className="icon-nav-drawer icon-word-wasp" />
                        <span className="nav-drawer-link-text">
                          Word Wasp
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        /* href="" */
                        className="nav-drawer-link linoleum-link"
                        onClick={this.showModal}
                      >
                        <span className="icon-nav-drawer icon-linoleum" />
                        <span className="nav-drawer-link-text">
                          Linoleum
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        /* href="" */
                        className="nav-drawer-link ricochet-link"
                        onClick={this.showModal}
                      >
                        <span className="icon-nav-drawer icon-ricochet" />
                        <span className="nav-drawer-link-text">
                          Ricochet
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        /* href="" */
                        className="nav-drawer-link nexus-link"
                        onClick={this.showModal}
                      >
                        <span className="icon-nav-drawer icon-nexus" />
                        <span className="nav-drawer-link-text">
                          Nexus
                        </span>
                      </a>
                    </li>
                    <li>
                      <a /* href="" */
                        className="nav-drawer-link all-games-link"
                        onClick={this.showModal}
                      >
                        <span className="nav-drawer-link-text">
                          All Games
                        </span>
                      </a>
                    </li>
                  </ul>
                  <hr/>
                  <ul>
                    <li>
                      <a
                        /* href="" */
                        className="nav-drawer-link archives-link coming-soon"
                      >
                        Wordcross Archives - Coming Soon!
                      </a>
                    </li>
                  </ul>
                  <hr/>
                  <h4>Other Games</h4>
                  <ul>
                    <li>
                      <a
                        /* href="" */
                        className="nav-drawer-link sudoku-link"
                        onClick={this.showModal}
                      >
                        Sudoku
                      </a>
                    </li>
                  </ul>
                  <hr/>
                  <h4>Other Links</h4>
                  <ul>
                    <li>
                      <a
                        href="https://matthewgreer.github.io/"
                        target=" "
                        className="nav-drawer-link wordnerd-link"
                      >
                        {/* Wordnerd, the Wordcross Column */}
                        Developer Matthew Greers's Portfolio
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.nytimes.com/crosswords"
                        target=" "
                        className="nav-drawer-link how-to-solve-link"
                      >
                        Compare the NY Times Crossword
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="nav-drawer-account-actions">
                  {this.props.currentUser ?
                    <div>
                      <h4>Profile</h4>
                      <a
                        /* href="" */
                        className="nav-drawer-link account-details-link coming-soon"
                      >
                        Account Details - Coming Soon!
                      </a>
                    </div> :
                    null
                  }
                  {this.displayedButtons()}
                </div>
              </div>
            </div>
            <div className="banner-main-logo">
              <a href="/">
                <img src={window.main_myt_logo} />
              </a>
            </div>
            <div className="top-banner-account-actions">
              {this.props.currentUser ?
                <div>&nbsp;</div> :
                this.displayedButtons()
              }
            </div>
          </header>
          <Modal
            modalType={this.state.modalType}
            wordcrossCategory={null}
            calculateTime={null}
            isSolvedDayOf={null}
            handleModalButtonClick={this.handleModalButtonClick}
            handleResetWordcross={null}
          />
        </header>
      )
    };
  };
};

export default Banner;
