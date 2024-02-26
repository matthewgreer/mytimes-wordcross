import React from 'react';

class UserStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userStats: this.props.userStats,
    }

    // this.weekdayStats = this.weekdayStats.bind(this);
  }

  componentDidMount() {
    this.props.fetchStats(this.props.currentUser.id);
  }

  componentDidUpdate(prevProps, _prevState) {
    if (this.props.stats !== prevProps.userStats) {
      this.setState({ userStats: this.props.userStats });
    }

    if (this.props.currentUser !== prevProps.currentUser) {
      this.props.fetchStats(this.props.currentUser.id);
    }
  };

  // weekdayStats() {
  //   const weekdayStats = this.state.stats.weekdays;
  //   const weekdayNames = {
  //     1: "Monday",
  //     2: "Tuesday",
  //     3: "Wednesday",
  //     4: "Thursday",
  //     5: "Friday",
  //     6: "Saturday",
  //     7: "Sunday"
  //   }

  //   return (
  //     <ul>
  //       {Object.entries(weekdayStats).map(([dayKey, dayStats]) => {
  //         let dayName = weekdayNames[dayKey];
  //         return (
  //           <li key={dayKey}>
  //             {dayName}:
  //             <ul>
  //               <li key={dayKey + "current"}>Current {dayName} time: {dayStats.currentWeekTime}</li>
  //               <li key={dayKey + "fastest"}>Best {dayName} time: {dayStats.fastestTime} on {dayStats.fastestTimeDate}</li>
  //               <li key={dayKey + "average"}>Average {dayName} time: {dayStats.averageTime}</li>
  //             </ul>
  //           </li>)
  //       })}
  //     </ul>
  //   )
  // }

  render() {
    return (
      <div className='user-stats-container'>
        <h1>Stats</h1>
        <p>Daily Puzzles Solved: {this.state.userStats.totalSolvedDailies}</p>
        <p>Solve Rate: {this.state.userStats.percentDailiesSolved}</p>
        <p>Current Streak: {this.state.userStats.streak}</p>
        <p>Longest Streak: we don't have this yet</p>
        {/* {this.state.userStats.weekdays && this.weekdayStats()} */}
      </div>
    )
  }
}

export default UserStats;
