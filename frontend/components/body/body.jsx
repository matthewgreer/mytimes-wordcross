import React from 'react';
import { Link } from 'react-router-dom';
import Advert from './advert';
import Dashboard from './dashboard';

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
        this.microDate = "2020-08-03";
        // this.dailyDate = "";
        break;
      case 1:
        this.microDate = "2020-10-22";
        // this.dailyDate = "";
        break;
      case 2:
        this.microDate = "2020-10-26";
        // this.dailyDate = "";
        break;
      case 3:
        this.microDate = "2019-09-22";
        // this.dailyDate = "";
        break;
      case 4:
        this.microDate = "2020-10-25";
        // this.dailyDate = "";
        break;
      case 5:
        this.microDate = "2020-10-21";
        // this.dailyDate = "";
        break;
      case 6:
        this.microDate = "2020-08-08";
        // this.dailyDate = "";
    }
   
    this.isSubscriber = this.props.currentUser ? "subscriber" : "non-subscriber";

  };
  
  componentDidMount() {
    this.props.fetchMicroAuthor(this.microDate);
    // this.props.fetchDailyAuthor(this.props.dailyDate);
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
        
        {this.props.microAuthor && 
        <Dashboard  
        microDate = {this.microDate}
        todaysFullDate = {this.todaysFullDate}
        isSubscriber = {this.isSubscriber}
        microAuthor = {this.props.microAuthor}
        // dailyAuthor = {this.props.dailyAuthor}
        /> 
      }
      </main>
    );
  }
}

export default Body;