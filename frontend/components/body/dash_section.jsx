import React from 'react';
import GameIcon from './game_icon';
import { Link } from 'react-router-dom';

const DashSection = ({
  type,       // micro, daily, other
  weekday,    // null
  today,      // Date Mon Feb 26 2024 17:18:42 GMT-0500 (Eastern Standard Time)
  subscriber, // subscriber, nonsubscriber
  icon,       // undefined
  author,     // undefined then "Joel Fagliano"
  streak,     // null
  streakDays, // null
  showModal   // function

}) => {
  
  const linkOptions = () => {
    if (type === 'other') {
     return { pathname: '' }
    } else {
      // this is weird
     return {
        pathname: `/${type}`,
        state: {
          referringComponent: 'dashboard',
          wordcrossCategory: weekday,
          today: today,
          streak: streak,
          streakDays: streakDays
        }
      }
    }
  };

  const infoWrapperStyle = () => {
    if (type !== 'other') {
      return subscriber;
    } else {
      return '';
    }
  };

  const puzzleTitle = () => {
    if (type === 'micro') {
      return (
        <h3>The Micro</h3>
      );
    } else if (type === 'daily') {
      return (
        <h3>The Wordcross</h3>
      );
    } else if (type === 'other') {
      return (
        <h3>Linoleum</h3>
      );
    } else {
      return (
        null
      );
    }
  };

  const puzzleInfo = () => {
    if (type === 'other') {
      return (
        <div className="other-puzzle-description">
          Match patterns from everyone's favorite flexible flooring.
        </div>
      );
    } else {
      return (
        <div className='wordcross-description'>
          <div className={`wordcross-date-text-wrapper ${type}-date-text-wrapper`}>
            {today.toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <hr />
          <div className="wordcross-byline">
            By {author}
            {type === 'daily' && <p>Edited by Will Shortz</p>}
          </div>
        </div>
      )
    }

  };

  const subscribeToday = () => {
    return (
      <Link to="/subscribe" className="daily-wordcross-info-text-wrapper">
        Want to play online?&nbsp;<span className="emphatic">Subscribe today!</span>
      </Link>
    );
  };

  const userStreak = () => {
    if (streak === 'none') {
      return (
        <Link to={linkOptions()} className="daily-wordcross-info-text-wrapper">
          <span>
            Complete today's wordcross and<span className="emphatic">&nbsp;start a streak</span>!
          </span>
        </Link>
      );
    } else if (streak === 'continue') {
      return (
        <Link to={linkOptions()} className="daily-wordcross-info-text-wrapper">
          <span>
            You're on a <span className="emphatic">&nbsp;{`${streakDays}`}&nbsp;</span> day streak! Keep it up!
          </span>
        </Link>
      );
    } else if (streak === 'extended') {
      if (streakDays === 1) {
        return (
          <Link to={linkOptions()} className="daily-wordcross-info-text-wrapper">
            <span>
              Nice! You started a streak. Congrats on day<span className="emphatic">&nbsp;{`${streakDays}`}</span>!
            </span>
          </Link>
        );
      } else {
        return (
          <Link to={linkOptions()} className="daily-wordcross-info-text-wrapper">
            <span>
              Nice! You extended your streak to<span className="emphatic">&nbsp;{`${streakDays}`}&nbsp;</span> days!
            </span>
          </Link>
        );
      }
    } else {
      return null;
    }
  };

  const dailyInfoText = () => {
    if (type === 'daily') {
      if (subscriber === 'subscriber') {
        return userStreak();
      } else {
        return subscribeToday();
      }
    } else {
      return null;
    }
  }

  const dashClickArea = () => {
    if (type === 'other') {
      return (
        <div
          onClick={showModal}
          style={{ textDecoration: 'none' }}
        >
          <div className={`wordcross-info-wrapper ${infoWrapperStyle()}`} >
            <GameIcon
              type={type}
              number={icon}
            />
            {puzzleTitle()}
          </div>
          {puzzleInfo()}
        </div>
      )
    } else {
      return (
        <Link
          to={linkOptions()}
          style={{ textDecoration: 'none' }}
        >
          <div className={`wordcross-info-wrapper ${infoWrapperStyle()}`} >
            <GameIcon
              type={type}
              number={icon}
            />
            {puzzleTitle()}
          </div>
          {puzzleInfo()}
        </Link>
      )
    }
  }

  return (
    <div className={`dashboard-section ${type}`}>
      <div className="dashboard-section-click-area">
        {dashClickArea()}
      </div>
      {dailyInfoText()}
    </div>
  )
};

export default DashSection;
