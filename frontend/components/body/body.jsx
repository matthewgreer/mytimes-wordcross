import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import UserMicroContainer from '../wordcross/user_micro_container';
import UserDailyContainer from '../wordcross/user_daily_container';
import UserStatsContainer from '../user_stats/user_stats_container';
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
            userId: eg. 3,
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
            userId: eg. 3,
            wordcross_date: '2020-11-23'
          }
        )
    */

    this.today = new Date();
    this.todaysDateYYYYMMDD = formatDate(this.today);
    this.todaysFullDate = this.today.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
    this.todaysWeekday = this.today.getDay();


    this.state = {
      modalType: 'none',
      fetchedPuzzlesForUser: null
    }

    this.showModal = this.showModal.bind(this);
    this.handleModalButtonClick = this.handleModalButtonClick.bind(this);
  };

  componentDidMount() {
    this.props.fetchMicro(this.todaysWeekday);
    this.props.fetchDaily(this.todaysWeekday);
  };

  componentDidUpdate(prevProps, _prevState) {
    if (this.props.currentUser && this.state.fetchedPuzzlesForUser !== this.props.currentUser.id) {
      this.props.fetchUserMicro(
        this.props.currentUser.id,
        this.todaysDateYYYYMMDD
      );
      this.props.fetchUserDaily(
        this.props.currentUser.id,
        this.todaysDateYYYYMMDD
      );
      this.state.fetchedPuzzlesForUser = this.props.currentUser.id;
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
        <Switch>
          <ProtectedRoute exact path="/micro"
            component={UserMicroContainer}
            {
              ...{
                currentUser: currentUser,
                fetchWordcross: this.props.fetchMicro,
                todaysFullDate: this.todaysFullDate,
                today: this.today,
                updateWordcross: this.props.updateMicro,
                weekday: this.todaysWeekday,
                wordcross: { ...micro, ...userMicro },
                wordcrossCategory: "Micro",
                wordcrossDate: this.todaysDateYYYYMMDD,
                wordcrossType: "Micro",
              }
            }
          />
          <ProtectedRoute exact path="/daily"
            component={UserDailyContainer}
            {
              ...{
                currentUser: currentUser,
                fetchWordcross: this.props.fetchDaily,
                todaysFullDate: this.todaysFullDate,
                today: this.today,
                updateWordcross: this.props.updateDaily,
                weekday: this.todaysWeekday,
                wordcrossCategory: this.today.toLocaleDateString(undefined, { weekday: 'long' }),
                wordcrossDate: this.todaysDateYYYYMMDD,
                wordcrossType: "Daily",
                wordcross: { ...daily, ...userDaily },
              }
            }
          />
          <ProtectedRoute exact path="/stats"
            component={UserStatsContainer}
            {
              ...{
                currentUser: currentUser,
                userStat: userStat,
                fetchUserStat: this.props.fetchUserStat,
              }
            }
          />
          <Route exact path="/">
            <Advert order={currentUser ? 3 : 1} />
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
          </Route>
          <Redirect to="/" />
        </Switch>
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
