import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Dashboard = (
  { 
    isSubscriber,
    today,
    todaysFullDate, 
    microAuthor,
    microDate, 
    // dailyAuthor
    // dailyDate,
  }
) => {

  // PROBABLY NEED TO FETCH USER_MICRO, USER_DAILY IN BODY, SO I CAN KNOW
  //   WHETHER THE USER HAS SOLVED THE CURRENT DAY'S PUZZLES OR NOT. :(
  // const microRibbon = () => {
    
  // };

  const dailySection = () => {
    if (isSubscriber === 'non-subscriber') {
      return(
        <div className="dashboard-section daily-wordcross">
          <Link to="/subscribe" className="daily-wordcross-click-area">
            <div className={`wordcross-info-wrapper ${isSubscriber}`}>
                <div className="daily-wordcross-icon-wrapper">
                  <div className="daily-wordcross-status-icon" />
                  <div className="subscribe-ribbon">
                    Subscribe
                  </div>
                </div>
              <h3>The Wordcross</h3>
            </div>
            <div className={`daily-wordcross-date-text-wrapper ${isSubscriber}`}>
              {todaysFullDate}
            </div>
            <hr/>
          </Link>
          <Link to="/subscribe" className="daily-wordcross-info-text-wrapper">
            Want to play online?&nbsp;<span className="emphatic">Subscribe today!</span>
          </Link>
        </div>
      )
    } else {
      // THIS IS THE SAME AS ABOVE, UNTIL DAILY PUZZLES ARE ADDED
      return(
        <div className="dashboard-section daily-wordcross">
          <Link to="/subscribe" className="daily-wordcross-click-area">
            <div className={`wordcross-info-wrapper ${isSubscriber}`}>
                <div className="daily-wordcross-icon-wrapper">
                  <div className="daily-wordcross-status-icon" />
                  <div className="subscribe-ribbon">
                    Subscribe
                  </div>
                </div>
              <h3>The Wordcross</h3>
            </div>
            <div className={`daily-wordcross-date-text-wrapper ${isSubscriber}`}>
              {todaysFullDate}
            </div>
            <hr/>
          </Link>
          <Link to="/subscribe" className="daily-wordcross-info-text-wrapper">
            Want to play online?&nbsp;<span className="emphatic">Subscribe today!</span>
          </Link>
        </div>
      )
    }
  };

  return(

    <div className="main-dashboard">
      <div className="dashboard-sections-container">
        <div className="dashboard-section micro-wordcross">
          <div className="micro-wordcross-click-area">
            <Link 
              to={{
                pathname: `/micro/${microDate}`,
                state: {
                  referringComponent: 'dashboard',
                  today: today,
                  todaysFullDate: todaysFullDate,
                }
              }}
              style={{ textDecoration: 'none' }}
            >
              <div className="wordcross-info-wrapper" >
                <div className="micro-wordcross-icon-wrapper">
                  <div className="micro-wordcross-status-icon" />
                  <div className="play-ribbon">
                    Play
                  </div>
                </div>
                <h3>The Micro</h3>
              </div>
              <div className="micro-wordcross-date-text-wrapper">
                {todaysFullDate}
              </div>
              <hr />
              <div className="wordcross-byline">
                By {microAuthor}
              </div>
            </Link>
          </div>
        </div>
        {dailySection()}
        <div className="dashboard-section other-puzzle">
          <a className="micro-wordcross-click-area" href="">
            <div className="wordcross-info-wrapper" >
              <div className="micro-wordcross-icon-wrapper">
                <div className="other-puzzle-icon" />
                <div className="new-badge">
                  New
                </div>
              </div>
              <h3>Linoleum</h3>
            </div>
            <div className="other-puzzle-description">
              Match patterns from everyone's favorite flexible flooring.
            </div>
          </a>
        </div>
      </div>
      <div className="dashboard-wordnerd-text-wrapper">
        <a className="dashboard-read-wordnerd-text">
          Read about today's puzzle on Wordnerd
        </a>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);