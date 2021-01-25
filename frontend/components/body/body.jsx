import React from 'react';
// import { Link } from 'react-router-dom';
import Advert from './advert';
import Dashboard from './dashboard';

class Body extends React.Component {
  constructor(props) {
    super(props);

    /*
      receives as props:
        currentUser: eg. {
          email: eg. testing5@test.com
          id: eg. 7,
          last_gold_star_date: eg. "2020-12-20T00:00:000Z"
          streak: eg. 21,
          timezone: "America/Los_Angeles"
        }
        ( after fetchMicroAuthor async returns:
          microAuthor: eg. 'Joel Fagliano'
        )
        ( after fetchUserMicro async returns:
          microDataSet: eg. {
            author: eg. 'Joel Fagliano',
            clue_set: eg. {
              a1: {
                boxes: ['0,2', '0,3', '0,4'],
                clue: 'Who can get these nuts?',
                direction: 'across',
                name: 'a1',
                number: 1
              },
              a2: ...etc.
            },
            icon: eg. 1,
            id: eg. 9,
            label_set: eg. [
              ['#', '#', '1', '2', '3'],
              ['#', '4', ' ', ' ', ' '],
              [] ...etc.
            ],
            micro_id: eg. 12,
            solution: eg. [
              ['#', '#', 'Y', 'O', 'U'],
              [] ...etc.
            ],
            solved: eg. false,
            solving_state: eg. [
              ['#', '#', 'Y', ' ', ' '],
              [] ...etc.
            ],
            timer: eg. ['0', '1', '34'],
            user_id: eg. 3,
            wordcross_date: '2020-11-23T00:00.000Z'
          }
        )
        ( after fetchUserDaily async returns:
          dailyDataSet: eg. {
            author: eg. 'Neville Fogerty',
            clue_set: eg. {
              a1: {
                boxes: ['0,2', '0,3', '0,4'],
                clue: 'Who can get \'deez nuts?\'',
                direction: 'across',
                name: 'a1',
                number: 1
              },
              a2: ...etc.
            },
            icon: eg. 1,
            id: eg. 9,
            label_set: eg. [
              ['#', '#', '1', '2', '3', '#', '#' '4', '5', '6', '7', '#', '8', '9', '10'],
              ['#', '11', ' ', ' ', ' ', '12', '#', '13', ' ', ' ', ' ' , '14', ' ', ' ', ' '],
              [] ...etc.
            ],
            daily_id: eg. 12,
            solution: eg. [
              ['#', '#', 'Y', 'O', 'U', '#', '#', 'C', 'A', 'N', 'T', '#', 'B', 'R', 'O'],
              [] ...etc.
            ],
            solved: eg. false,
            solving_state: eg. [
              ['#', '#', 'Y', 'O', 'U', '#', '#', ' ', ' ', ' ', ' ', '#', 'B', ' ', ' '],
              [] ...etc.
            ],
            timer: eg. ['0', '1', '34'],
            user_id: eg. 3,
            wordcross_date: '2020-11-23T00:00.000Z'
          }
        )
    */
    
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

    this.yesterdaysDate = new Date();
    this.yesterdaysDate.setDate(this.todaysDate.getDate()-1);

// ***  Though the body will always display today's date, I hardcode   ***
// ***  the wordcross's date under the hood. Since I'm not going to    ***
// ***  add new Micro and Daily wordcrosses every day like the NYT, I  ***
// ***  implement a case statement that determines which of my seven   ***
// ***  seeded wordcrosses gets displayed in the body based on the     ***
// ***  current day of the week.                                       ***

    switch (this.todaysDate.getDay()) {
      case 0:
        this.microDate = "2020-08-03";
        this.dailyDate = "2019-01-27";
        this.dailyType = "Sunday";
        break;
      case 1:
        this.microDate = "2020-10-22";
        this.dailyDate = "2020-07-06";
        this.dailyType = "Monday"
        break;
      case 2:
        this.microDate = "2020-10-26";
        this.dailyDate = "2017-11-21";
        this.dailyType = "Tuesday"
        break;
      case 3:
        this.microDate = "2019-09-22";
        this.dailyDate = "2019-07-24";
        this.dailyType = "Wednesday"
        break;
      case 4:
        this.microDate = "2020-10-25";
        this.dailyDate = "2020-07-23";
        this.dailyType = "Thursday"
        break;
      case 5:
        this.microDate = "2020-10-21";
        this.dailyDate = "2020-07-17";
        this.dailyType = "Friday"
        break;
      case 6:
        this.microDate = "2020-08-08";
        this.dailyDate = "2020-02-15";
        this.dailyType = "Saturday"
    }
   
    // this.isSubscriber = this.props.currentUser ? "subscriber" : "non-subscriber";

    this.currentStreak = 0;
    this.fetchWordcrosses = this.fetchWordcrosses.bind(this);
    this.userStreak = this.userStreak.bind(this);
    this.displayDashboard = this.displayDashboard.bind(this);

  };
  
  componentDidMount() {
    this.fetchWordcrosses();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentUser !== prevProps.currentUser ) {
      this.fetchWordcrosses();
    }
  };

  fetchWordcrosses() {
    if (this.props.currentUser) {
      this.props.fetchUserMicro(
        this.props.currentUser.id,
        this.microDate
      );
      this.props.fetchUserDaily(
        this.props.currentUser.id,
        this.dailyDate
      );
    } else {
    this.props.fetchMicroAuthor(this.microDate);
    this.props.fetchDailyAuthor(this.dailyDate);
    }
  };

  userStreak() {
    if (this.props.currentUser.last_gold_star_date === null || 
      this.props.currentUser.streak === null) {
      this.currentStreak = 0;
      return 'none';
    }
    const lastDate = this.props.currentUser.last_gold_star_date;
    const lastCompletedDate = 
      `${lastDate.slice(5,7)}/${lastDate.slice(8,10)}/${lastDate.slice(0,4)}`;
    if (this.yesterdaysDate.toLocaleDateString() === lastCompletedDate) {
      this.currentStreak = this.props.currentUser.streak;
      return 'continue';
    } else if (this.todaysDate.toLocaleDateString() === lastCompletedDate) {
      this.currentStreak = this.props.currentUser.streak;
      return 'extended';
    } else {
      this.currentStreak = 0;
      return 'none';
    }
  };

  displayDashboard() {
    if (!this.props.currentUser) {
      return (
        <div className="dashboard-container">
          {(this.props.microAuthor && this.props.dailyAuthor) && 
            <Dashboard 
              dailyAuthor = {this.props.dailyAuthor}
              dailyDataSet = {null}
              dailyDate = {this.dailyDate}
              dailyType = {this.dailyType}
              dailyIcon = {0}
              microAuthor = {this.props.microAuthor}
              microDataSet = {null}
              microDate = {this.microDate}
              microIcon = {0}
              streak = 'none'
              streakDays = {0}
              subscriber = "non-subscriber"
              today = {this.todaysDate}
              todaysFullDate = {this.todaysFullDate}
              otherIcon = {101}
            />
          }
        </div>
      )
    } else {
      return (
        <div className="dashboard-container">
          {(this.props.microDataSet 
          && this.props.dailyDataSet
          ) &&
            <Dashboard 
              dailyAuthor = {this.props.dailyDataSet.author}
              dailyDataSet = {this.props.dailyDataSet}
              dailyDate = {this.dailyDate}
              dailyType = {this.dailyType}
              dailyIcon = {this.props.dailyDataSet.icon}
              microAuthor = {this.props.microDataSet.author}
              microDataSet = {this.props.microDataSet}
              microDate = {this.microDate}
              microIcon = {this.props.microDataSet.icon}
              streak = {this.userStreak()}
              streakDays = {this.currentStreak}
              subscriber="subscriber"
              today = {this.todaysDate}
              todaysFullDate = {this.todaysFullDate}
              otherIcon ={101}
            />
          }
        </div>
      )
    }
  };

  render() {
    return (
      <main>
        {
          this.props.currentUser ? 
          <div className="banner-buffer"></div> :
          <div className="banner-buffer with-notification"></div>
        }
        { 
          this.props.currentUser ?
          <Advert order={3} /> :
          <Advert order={1} />
        }
        {this.displayDashboard()}
      </main>
    );
  }
}

export default Body;