import React from 'react';
// import { Link } from 'react-router-dom';
import Advert from './advert';
import Dashboard from './dashboard';
import wordcrossDateInfo from './wordcross_date_info';

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
    this.dateInfo = wordcrossDateInfo();
    // this.dateInfo will be set to: eg. 
    //       {
    //         todaysDate: Fri Feb 19 2021 17:53:28 GMT-0500 (Eastern Standard Time),
    //         todaysFullDate: "Friday, Feb 19, 2021",
    //         yesterdaysDate: Thu Feb 18 2021 17:53:58 GMT-0500 (Eastern Standard Time),
    //         microDate: "2020-10-21",
    //         dailyDate: "2020-07-17",
    //         dailyType: "Friday"
    //       }



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
        this.dateInfo.microDate
      );
      this.props.fetchUserDaily(
        this.props.currentUser.id,
        this.dateInfo.dailyDate
      );
    } else {
    this.props.fetchMicroAuthor(this.dateInfo.microDate);
    this.props.fetchDailyAuthor(this.dateInfo.dailyDate);
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
    if (this.dateInfo.yesterdaysDate.toLocaleDateString() === lastCompletedDate) {
      this.currentStreak = this.props.currentUser.streak;
      return 'continue';
    } else if (this.dateInfo.todaysDate.toLocaleDateString() === lastCompletedDate) {
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
              dailyDate = {this.dateInfo.dailyDate}
              dailyType = {this.dateInfo.dailyType}
              dailyIcon = {0}
              microAuthor = {this.props.microAuthor}
              microDataSet = {null}
              microDate = {this.dateInfo.microDate}
              microIcon = {0}
              streak = 'none'
              streakDays = {0}
              subscriber = "non-subscriber"
              today = {this.dateInfo.todaysDate}
              todaysFullDate = {this.dateInfo.todaysFullDate}
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
              dailyDate = {this.dateInfo.dailyDate}
              dailyType = {this.dateInfo.dailyType}
              dailyIcon = {this.props.dailyDataSet.icon}
              microAuthor = {this.props.microDataSet.author}
              microDataSet = {this.props.microDataSet}
              microDate = {this.dateInfo.microDate}
              microIcon = {this.props.microDataSet.icon}
              streak = {this.userStreak()}
              streakDays = {this.currentStreak}
              subscriber="subscriber"
              today = {this.dateInfo.todaysDate}
              todaysFullDate = {this.dateInfo.todaysFullDate}
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