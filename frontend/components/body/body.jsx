import React from 'react';
import { Link } from 'react-router-dom';
import Advert from './advert';
import Dashboard from './dashboard';

class Body extends React.Component {
  constructor(props) {
    super(props);
    
    // get current date and time
    // !!! TO DO: eventually have it update regularly
    this.todaysDate = new Date();

    this.todaysFullDate = this.todaysDate.toLocaleDateString(
      undefined, {
        weekday: 'long', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
      }
    );

// ***  Though the body will always display today's date, I hardcode   ***
// ***  the wordcross's date under the hood. Since I'm not going to    ***
// ***  add new Micro and Daily wordcrosses every day like the NYT, I  ***
// ***  implement a case statement that determines which of my seven   ***
// ***  seeded wordcrosses gets displayed in the body based on the     ***
// ***  current day of the week.                                       ***

    switch (this.todaysDate.getDay()) {
      case 0:
        this.microDate = "2020-08-03";
        // this.dailyDate = "";
        // this.dailyType = "Sunday";
        break;
      case 1:
        this.microDate = "2020-10-22";
        // this.dailyDate = "";
        // this.dailyType = "Monday"
        break;
      case 2:
        this.microDate = "2020-10-26";
        // this.dailyDate = "";
        // this.dailyType = "Tuesday"
        break;
      case 3:
        this.microDate = "2019-09-22";
        // this.dailyDate = "";
        // this.dailyType = "Wednesday"
        break;
      case 4:
        this.microDate = "2020-10-25";
        // this.dailyDate = "";
        // this.dailyType = "Thursday"
        break;
      case 5:
        this.microDate = "2020-10-21";
        // this.dailyDate = "";
        // this.dailyType = "Friday"
        break;
      case 6:
        this.microDate = "2020-08-08";
        // this.dailyDate = "";
        // this.dailyType = "Saturday"
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
        
        {(this.props.microAuthor || this.props.dailyAuthor) && 
        <Dashboard  
          isSubscriber = {this.isSubscriber}
          today = {this.todaysDate}
          todaysFullDate = {this.todaysFullDate}
          microAuthor = {this.props.microAuthor}
          microDate = {this.microDate}
          // dailyAuthor = {this.props.dailyAuthor}
          // dailyDate = {this.dailyDate}
          // dailyType = {this.dailyType}
        /> 
      }
      </main>
    );
  }
}

export default Body;