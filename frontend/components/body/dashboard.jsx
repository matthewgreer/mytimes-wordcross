import React from 'react';
import DashSection from './dash_section';
import { withRouter } from 'react-router-dom';

const Dashboard = (
  {
    dailyAuthor,    // eg. 'Randolph Ross'
    today,          // eg. '2019-01-27'
    weekday,        // eg. 0 (for Sunday)
    dailyIcon,      // eg. 1
    microAuthor,    // eg. 'Joe Fagliano'
    microIcon,      // eg. 1
    streak,         // eg. 'none' || 'continue' || 'extended'
    streakDays,     // eg. 23
    subscriber,     // eg. true || false
    otherIcon,      // eg. 100
    showModal       // fn
  }
) => {

  return(

    <div className="main-dashboard">
      <div className="dashboard-sections-container">
        <DashSection
          type='micro'
          weekday={null}
          today={today}
          subscriber={subscriber}
          icon={microIcon}
          author={microAuthor}
          streak={null}
          streakDays={null}
          showModal={null}
        />
        <DashSection
          type='daily'
          weekday={weekday}
          today={today}
          subscriber={subscriber}
          icon={dailyIcon}
          author={dailyAuthor}
          streak={streak}
          streakDays={streakDays}
          showModal={null}
        />
        <DashSection
          type='other'
          category='Other'
          today={today}
          subscriber={subscriber}
          icon={otherIcon}
          author={null}
          streak={null}
          streakDays={null}
          showModal={showModal}
        />
      </div>
      <div className="dashboard-wordnerd-text-wrapper">
        <a
          className="dashboard-read-wordnerd-text"
          href="http://www.matthewgreer.net"
          target=" "
        >
          Learn about our developer at matthewgreer.net
        </a>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
