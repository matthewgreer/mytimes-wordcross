import React from 'react';
import { Link } from 'react-router-dom';

class Body extends React.Component {
  constructor(props) {
    super(props);
    
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
// ***  of the week. ie. one puzzle's actual puzzle_date is Oct 22, so   ***
// ***  this.puzzleDate = "2020-10-22" if todaysDate.getDay() == 0, etc  ***

    this.puzzleDate = "2020-10-22";
   
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
        <aside className={this.isSubscriber}>
          <div className="advertising-section" >
            <img className="dummy-ad" src={window.dummy_ad} />
          </div>
        </aside>
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
                    by Joel Fagliano
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
/* 

should receive currentUser 
<Route exact path="/" component={BodyContainer} />

this should be similar to what's needed for a logged in puzzle page:


Define a <ProtectedRoute> helper method in your route_util.js. It should:
Check to see if the application state has a currentUser property. You can use the loggedIn boolean like we did in our AuthRoute component.
If true, render the component.
Otherwise, Redirect to "/login".

<ProtectedRoute exact path="benches/new" component="{BenchFormContainer}" />

and ultimately this should be similar to rendering the actual puzzle's page

a full-body component that displays the puzzle and its accompanying info
should mount when a user clicks on the icon on the splash page or on
the link in the nav drawer

create a new Route for PuzzleContainer that has a puzzleId param

*/