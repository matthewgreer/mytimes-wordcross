import React from 'react';
import { Link } from 'react-router-dom';
import Advert from './advert';

class Body extends React.Component {
  constructor(props) {
    super(props);

    // NOTE! Do I need to run queries for the day's puzzles' data now, in
      // order to have the byline info? If so, how to handle the asynch 
      // request before display issue? I can use the Modal to delay rendering 
      // the puzzle page until the request returns, but how would I do that 
      // for this (main splash) body component? Do I need to abstract the
      // dashboard section to a component and only render when the request
      // returns puzzle data? In this case, I probably don't need the
      // Modal to take responsibility for the delay, because I would already
      // be able to pass the puzzle's data along as props.
    
    // get current date and time
    // eventually have it update regularly
    const todaysDate = new Date();

    this.todaysFullDate = todaysDate.toLocaleDateString(
      undefined, {
        weekday: 'long', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
      }
    );

// ***  Though the body will always display today's date, I will hard-   ***
// ***  code the puzzle's date under the hood. Since I'm not going to    ***
// ***  add a new Micro and new Daily puzzle every day like the NYT, I   ***
// ***  implement a case statement that determines which of my seven     ***
// ***  seeded puzzles gets displayed in the body based on today's day   ***
// ***  of the week.                                                     ***

  switch (todaysDate.getDay()) {
    case 0:
      this.puzzleDate = "2020-08-03";
      break;
    case 1:
      this.puzzleDate = "2020-10-22";
      break;
    case 2:
      this.puzzleDate = "2020-10-26";
      break;
    case 3:
      this.puzzleDate = "2019-09-22";
      break;
    case 4:
      this.puzzleDate = "2020-10-25";
      break;
    case 5:
      this.puzzleDate = "2020-10-21";
      break;
    case 6:
      this.puzzleDate = "2020-08-08";
  }
   
    this.isSubscriber = this.props.currentUser ? "subscriber" : "non-subscriber";

  };

  render() {
    return (
      <main>
        {
        this.props.currentUser ? 
        <div className="banner-buffer"></div> :
        <div className="banner-buffer with-notification"></div>
        }
        <Advert isSubscriber={this.isSubscriber} />
        <div className="main-dashboard">
          <div className="dashboard-sections-container">
            <div className="dashboard-section micro-puzzle">
              <div className="micro-puzzle-click-area">
                <Link 
                  to={{
                    pathname: `/micro/${this.puzzleDate}`
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
                    {this.todaysFullDate}
                  </div>
                  <hr />
                  <div className="wordcross-byline">
                    By JOEL FAGLIANO
                  </div>
                </Link>
              </div>
            </div>
            <div className="dashboard-section daily-wordcross">
              <Link to="/subscribe" className="daily-wordcross-click-area">
                <div className={`wordcross-info-wrapper ${this.isSubscriber}`}>
                    <div className="daily-wordcross-icon-wrapper">
                      <div className="daily-wordcross-status-icon" />
                      <div className="subscribe-ribbon">
                        Subscribe
                      </div>
                    </div>
                  <h3>The Wordcross</h3>
                </div>
                <div className={`daily-wordcross-date-text-wrapper ${this.isSubscriber}`}>
                  {this.todaysFullDate}
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
      </main>
    );
  }
}

export default Body;