import React from 'react';
// import { Link } from 'react-router-dom';
import Advert from './advert';
import Dashboard from './dashboard';
import Modal from '../wordcross/wordcross_header/modal/modal'
import formatDate  from './format_date';

class Body extends React.Component {
  constructor(props) {
    super(props);

    /*
      receives as props:
        currentUser: eg. {
          email: eg. testing5@test.com
          id: eg. 7,
        }
        ( after fetchMicro async returns:
          micro: {
            author: eg. 'Joel Fagliano',
            clueSet: eg. {
              a1: {
                boxes: ['0,2', '0,3', '0,4'],
                clue: '(Hu)Man\'s best friend',
                direction: 'across',
                name: 'a1',
                number: 1
              },
              a2: ...etc.
            },
            labelSet: eg. [
              ['#', '#', '1', '2', '3'],
              ['#', '4', ' ', ' ', ' '],
              [] ...etc.
            ],
            solution: eg. [
              ['#', '#', 'D', 'O', 'G'],
              [] ...etc.
            ],
            weekday: eg. 1 (for Monday)
          }
        )
        ( after fetchDaily async returns:
          daily: {
            author: eg. 'Joel Fagliano',
            clueSet: eg. {
              a1: {
                boxes: ['0,2', '0,3', '0,4'],
                clue: '(Hu)Man\'s best friend',
                direction: 'across',
                name: 'a1',
                number: 1
              },
              a2: ...etc.
            },
            label_set: eg. [
              ['#', '#', '1', '2', '3', '#', '#' '4', '5', '6', '7', '#', '8', '9', '10'],
              ['#', '11', ' ', ' ', ' ', '12', '#', '13', ' ', ' ', ' ' , '14', ' ', ' ', ' '],
              [] ...etc.
            ],
            solution: eg. [
              ['#', '#', 'D', 'O', 'G', '#', '#', 'C', 'A', 'N', 'T', '#', 'B', 'R', 'O'],
              [] ...etc.
            ],
            weekday: eg. 1 (for Monday)
          }
        )
        ( after fetchUserMicro async returns:
          userMicro: eg. {
            icon: eg. 1,
            id: eg. 9,
            microId: eg. 12,
            solved: eg. false,
            solvingState: eg. [
              ['#', '#', 'Y', ' ', ' '],
              [] ...etc.
            ],
            timer: eg. 94,
            user_id: eg. 3,
            wordcross_date: '2020-11-23'
          }
        )
        ( after fetchUserDaily async returns:
          userDaily: eg. {
            icon: eg. 1,
            id: eg. 9,
            daily_id: eg. 12,
            solved: eg. false,
            solving_state: eg. [
              ['#', '#', 'Y', 'O', 'U', '#', '#', ' ', ' ', ' ', ' ', '#', 'B', ' ', ' '],
              [] ...etc.
            ],
            timer: eg. 94,
            user_id: eg. 3,
            wordcross_date: '2020-11-23'
          }
        )
    */

    this.today = new Date();
    this.todaysDateYYYYMMDD = formatDate(this.today);
    this.todaysWeekday = this.today.getDay();


    this.state = {
      modalType: 'none'
    }

    this.fetchWordcrosses = this.fetchWordcrosses.bind(this);
    this.userStreak = this.userStreak.bind(this);
    this.displayDashboard = this.displayDashboard.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleModalButtonClick = this.handleModalButtonClick.bind(this);
  };
  
  componentDidMount() {
    this.props.fetchMicro(this.todaysWeekday);
    this.props.fetchDaily(this.todaysWeekday);
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
        this.todaysDateYYYYMMDD
      );
      this.props.fetchUserDaily(
        this.props.currentUser.id,
        this.todaysDateYYYYMMDD
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

  handleModalButtonClick() {
    this.setState({
      modalType: 'none'
    });
  };

  showModal() {
    this.setState({
      modalType: 'dummyLink'
    });
  };

  render() {
    const { currentUser, userMicro, userDaily, micro, daily, userStat } = this.props;
    return (
      <main>

        <div className={`banner-buffer ${currentUser ? "" : "with-notification"}`}></div>
        <Advert order={currentUser ? 3 : 1 } />
        <div className="dashboard-container">
          {daily && micro &&
          <Dashboard
          dailyAuthor={daily.author}
          today={this.today}
          weekday={this.todaysWeekday}
          dailyIcon={currentUser ? userDaily.icon : 0}
          microAuthor={micro.author}
          microIcon={currentUser ? userMicro.icon : 0}
          streak={currentUser && userStat ? userStat.streak : 'none'}
          streakDays={currentUser && userStat ? userStat.streak : 0}
          subscriber={currentUser ? "subscriber" : "non-subscriber"}
          otherIcon={101}
          showModal={this.showModal}
          />
          }
        </div>
        <Modal
            modalType={this.state.modalType}
            wordcrossCategory={null}
            calculateTime={null}
            isSolvedDayOf={null}
            handleModalButtonClick={this.handleModalButtonClick}
            handleResetWordcross={null}
          />
      </main>
    );
  }
}

export default Body;
