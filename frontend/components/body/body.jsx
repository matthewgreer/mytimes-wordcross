import React from 'react';
import { Link } from 'react-router-dom';

class Body extends React.Component {
  constructor(props) {
    super(props);
    // get current date and time
    // eventually may have it update regularly
    const todaysDate = new Date();

    const months = [
      'Jan.',
      'Feb.',
      'Mar.',
      'Apr.',
      'May',
      'June',
      'July',
      'Aug.',
      'Sept.',
      'Oct.',
      'Nov.',
      'Dec.'
    ]

    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]

    this.year = todaysDate.getFullYear();
    this.month = months[todaysDate.getMonth()];
    this.date = todaysDate.getDate();
    this.day = weekdays[todaysDate.getDay()];
    this.fullDate = `${this.day}, ${this.month} ${this.date}, ${this.year}`

  }

  render() {
    return (
      <main>
        <aside>
          <div className="banner-buffer"></div>
          <div className="advertising-section" >
            <img className="dummy-ad" src={window.dummy_ad} />
          </div>
        </aside>
        <div className="main-dashboard">
          <div className="dashboard-sections-container">
            <div className="dashboard-section mini-puzzle">


              <a className="daily-crossword-click-area" href="">
                <div className="daily-crossword-info-wrapper">
                  <div className="daily-crossword-icon-wrapper">
                    <div className="daily-crossword-status-icon" />
                    <div className="subscribe-ribbon">
                      Play
                      </div>
                  </div>
                  <h3>The Mini</h3>
                </div>
                <div className="daily-crossword-date-text-wrapper">
                  {this.fullDate}
                </div>
                <hr />
              </a>



            </div>
            <div className="dashboard-section daily-crossword">
              <a className="daily-crossword-click-area" href="">
                <div className="daily-crossword-info-wrapper">
                    <div className="daily-crossword-icon-wrapper">
                      <div className="daily-crossword-status-icon" />
                      <div className="subscribe-ribbon">
                        Subscribe
                      </div>
                    </div>
                  <h3>The Crossword</h3>
                </div>
                <div className="daily-crossword-date-text-wrapper">
                  {this.fullDate}
                </div>
                <hr/>
              </a>
              <a className="daily-crossword-info-text-wrapper">
                Want to play online?&nbsp;<span className="emphatic">Subscribe today!</span>
              </a>
            </div>
            <div className="dashboard-section other-puzzle">

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