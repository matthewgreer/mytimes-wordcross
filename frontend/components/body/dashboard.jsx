import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Dashboard = (
  { 
    subscriber,
    today,
    todaysFullDate, 
    microAuthor,
    microDataSet,
    microDate, 
    // dailyDataSet,
    // dailyDate,
    // dailyType
  }
) => {

  const microSection = () => {
    if (subscriber === 'non-subscriber') {
      return(
        <div className="dashboard-section micro-wordcross">
          <div className="dashboard-section-click-area">
            <Link 
              to="/subscribe" 
              style={{ textDecoration: 'none' }}
            >
              <div className={`wordcross-info-wrapper ${subscriber}`}>
                <div className="micro-icon-wrapper">
                  <div className="wordcross-status-icon micro-icon inactive-icon" />
                  <div className="ribbon micro-ribbon subscribe-ribbon">Subscribe</div>
                </div>
                <h3>The Micro</h3>
              </div>
              <div className="wordcross-date-text-wrapper micro-date-text-wrapper">
                {todaysFullDate}
              </div>
              <hr />
              <div className="wordcross-byline">
                By {microAuthor}
              </div>
            </Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className="dashboard-section micro-wordcross">
          <div className="dashboard-section-click-area">
            <Link 
              to={{
                pathname: `/micro/${microDate}`,
                state: {
                  referringComponent: 'dashboard',
                  wordcrossCategory: 'Micro',
                  today: today,
                  wordcrossDataSet: microDataSet
                }
              }}
              style={{ textDecoration: 'none' }}
            >
              <div className={`wordcross-info-wrapper ${subscriber}`} >
                <div className="micro-icon-wrapper">
                  <div className="wordcross-status-icon micro-icon active-icon" />
                  <div className="ribbon micro-ribbon play-ribbon" >Play</div>
                </div>
                <h3>The Micro</h3>
              </div>
              <div className="wordcross-date-text-wrapper micro-date-text-wrapper">
                {todaysFullDate}
              </div>
              <hr />
              <div className="wordcross-byline">
                By {microAuthor}
              </div>
            </Link>
          </div>
        </div>
      )
    }
  };

  const dailySection = () => {
    if (subscriber === 'non-subscriber') {
      return(
        <div className="dashboard-section daily-wordcross">
          <div className="dashboard-section-click-area">
            <Link 
              to="/subscribe" 
              style={{ textDecoration: 'none' }} 
            >
              <div className={`wordcross-info-wrapper ${subscriber}`}>
                  <div className="daily-icon-wrapper">
                    <div className="wordcross-status-icon daily-status-icon inactive-icon" />
                    <div className="ribbon daily-ribbon subscribe-ribbon">Subscribe</div>
                  </div>
                <h3>The Wordcross</h3>
              </div>
              <div className={`wordcross-date-text-wrapper daily-date-text-wrapper ${subscriber}`}>
                {todaysFullDate}
              </div>
              <hr/>
            </Link>
          </div>
          <Link to="/subscribe" className="daily-wordcross-info-text-wrapper">
            Want to play online?&nbsp;<span className="emphatic">Subscribe today!</span>
          </Link>
        </div>
      )
    } else {
      // FOR NOW, UNTIL DAILY PUZZLES ARE ADDED, THIS IS LARGELY THE SAME AS ABOVE
      return(
        <div className="dashboard-section daily-wordcross">
          <div className="dashboard-section-click-area">
            <Link 
              to="/subscribe"
              style={{ textDecoration: 'none' }} 
            >
              {/* <Link 
                to={{
                    pathname: `/daily/${dailyDate}`,
                    state: {
                      referringComponent: 'dashboard',
                      wordcrossCategory: dailyType,
                      today: today
                    }
                  }}
                  style={{ textDecoration: 'none' }}
                > */}
              <div className={`wordcross-info-wrapper ${subscriber}`}>
                  <div className="daily-icon-wrapper">
                    <div className="wordcross-status-icon daily-status-icon active-icon" />
                    <div className="ribbon daily-ribbon play-ribbon">Play</div>
                  </div>
                <h3>The Wordcross</h3>
              </div>
              <div className={`wordcross-date-text-wrapper daily-date-text-wrapper ${subscriber}`}>
                {todaysFullDate}
              </div>
              <hr/>
            </Link>
          </div>
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
        {microSection()}
        {dailySection()}
        <div className="dashboard-section other-puzzle">
          <a className="dashboard-section-click-area" href="">
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