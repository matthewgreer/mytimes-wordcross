import React from 'react';
import DashSection from './dash_section';
import { withRouter } from 'react-router-dom';

const Dashboard = (
  { 
    dailyAuthor,    // eg. 'Randolph Ross'
    dailyDate,      // eg. '2019-01-27'
    dailyIcon,      // eg. 1
    dailyType,      // eg. 'Monday'
    lastCompletedDaily,
    microAuthor,    // eg. 'Joe Fagliano'
    microDate,      // eg. '2020-08-03'
    microIcon,      // eg. 1
    streak,
    subscriber,     // eg. 'non-subscriber' || 'subscriber'
    today,          // eg. '2020-11-23T00:00.000Z'
    todaysFullDate, // eg. 'Monday, Nov. 23, 2020'
    otherIcon       // eg. 100
  }
) => {


  return(

    <div className="main-dashboard">
      <div className="dashboard-sections-container">
        <DashSection 
          type='micro'
          category='Micro'
          date={microDate}
          subscriber={subscriber}
          icon={microIcon}
          fullDate={todaysFullDate}
          author={microAuthor}
          today={today}
          streak={null}
          lastCompletedDaily={null}
        />
        <DashSection 
          type='daily'
          category={dailyType}
          date={dailyDate}
          subscriber={subscriber}
          icon={dailyIcon}
          fullDate={todaysFullDate}
          author={dailyAuthor}
          today={today}
          streak={streak}
          lastCompletedDaily={lastCompletedDaily}
        />
        <DashSection 
          type='other'
          category='Other'
          date={null}
          subscriber={subscriber}
          icon={otherIcon}
          fullDate={null}
          author={null}
          today={today}
          streak={null}
          lastCompletedDaily={null}
        />
      </div>
      <div className="dashboard-wordnerd-text-wrapper">
        <a className="dashboard-read-wordnerd-text">
          Read about today's puzzle on Wordnerd
        </a>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);