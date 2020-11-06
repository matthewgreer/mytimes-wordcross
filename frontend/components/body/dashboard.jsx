import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (
  { 
    isSubscriber,
    microAuthor,
    microDate, 
    todaysFullDate, 
    // dailyDate,
    // dailyAuthor
  }
) => {
  return(
    <div className="main-dashboard">
      <div className="dashboard-sections-container">
        <div className="dashboard-section micro-puzzle">
          <div className="micro-puzzle-click-area">
            <Link 
              to={{
                pathname: `/micro/${microDate}`,
                state: {referringComponent: 'dashboard'}
              }}
              style={{ textDecoration: 'none' }}
            >
              <div className="wordcross-info-wrapper" >
                <div className="micro-puzzle-icon-wrapper">
                  <div className="micro-puzzle-status-icon" />
                  <div className="play-ribbon">
                    Play
                  </div>
                </div>
                <h3>The Micro</h3>
              </div>
              <div className="micro-puzzle-date-text-wrapper">
                {todaysFullDate}
              </div>
              <hr />
              <div className="wordcross-byline">
                By {microAuthor}
              </div>
            </Link>
          </div>
        </div>
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
        <div className="dashboard-section other-puzzle">
          <a className="micro-puzzle-click-area" href="">
            <div className="wordcross-info-wrapper" >
              <div className="micro-puzzle-icon-wrapper">
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

export default Dashboard;