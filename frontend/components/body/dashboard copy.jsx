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

  // let microLinkOptions;
  // let dailyLinkOptions;
  // let dailyInfoText;
  // const subscribeToday = () => {
  //   return (
  //     <Link to="/subscribe" className="daily-wordcross-info-text-wrapper">
  //       Want to play online?&nbsp;<span className="emphatic">Subscribe today!</span>
  //     </Link>
  //   );
  // };
  // const userDailyStreak = (lastCompletedDaily, streak) => {
    // let date = new Date();
    // setDate(date.getDate() - 1)
  // };

  // if (subscriber === 'non-subscriber') {
  //   microLinkOptions = '/subscribe';
  //   dailyLinkOptions = '/subscribe';
  //   dailyInfoText = subscribeToday();
  // } else {
  //   microLinkOptions = {
  //     pathname: `/micro/${microDate}`,
  //     state: {
  //       referringComponent: 'dashboard',
  //       wordcrossCategory: 'Micro',
  //       today: today,
  //       // wordcrossDataSet: microDataSet
  //     }
  //   };
  //   dailyLinkOptions = {
  //     pathname: `/daily/${dailyDate}`,
  //     state: {
  //       referringComponent: 'dashboard',
  //       wordcrossCategory: dailyType,
  //       today: today,
  //       // wordcrossDataSet: dailyDataSet      
  //     }
  //   };
  //   dailyInfoText = `Last gold star on: ${lastCompletedDaily}. Streak: ${streak}`;
  // }

  // const microSection = () => {
  //   return (
  //     <div className="dashboard-section micro-wordcross">
  //       <div className="dashboard-section-click-area">
  //         <Link 
  //           to={{
  //             pathname: `/micro/${microDate}`,
  //             state: {
  //               referringComponent: 'dashboard',
  //               wordcrossCategory: 'Micro',
  //               today: today,
  //               // wordcrossDataSet: microDataSet
  //             }
  //           }}
  //           style={{ textDecoration: 'none' }}
  //         >
  //           <div className={`wordcross-info-wrapper ${subscriber}`} >
  //             {/* <div className="micro-icon-wrapper">
  //               <div className="wordcross-status-icon micro-icon active-icon" />
  //               <div className="ribbon micro-ribbon play-ribbon" >Play</div>
  //             </div> */}
  //             <GameIcon 
  //               type='micro'
  //               number={microIcon}
  //             />                
  //             <h3>The Micro</h3>
  //           </div>
  //           <div className="wordcross-date-text-wrapper micro-date-text-wrapper">
  //             {todaysFullDate}
  //           </div>
  //           <hr />
  //           <div className="wordcross-byline">
  //             By {microAuthor}
  //           </div>
  //         </Link>
  //       </div>
  //     </div>
  //   )
    
  // };

  // const dailySection = () => {
  //   if (subscriber === 'non-subscriber') {
  //     return(
  //       <div className="dashboard-section daily-wordcross">
  //         <div className="dashboard-section-click-area">
  //           <Link 
  //             to="/subscribe" 
  //             style={{ textDecoration: 'none' }} 
  //           >
  //             <div className={`wordcross-info-wrapper ${subscriber}`}>
  //                 <div className="daily-icon-wrapper">
  //                   <div className="wordcross-status-icon daily-status-icon inactive-icon" />
  //                   <div className="ribbon daily-ribbon subscribe-ribbon">Subscribe</div>
  //                 </div>
  //               <h3>The Wordcross</h3>
  //             </div>
  //             <div className={`wordcross-date-text-wrapper daily-date-text-wrapper ${subscriber}`}>
  //               {todaysFullDate}
  //             </div>
  //             <hr/>
  //             <div className="wordcross-byline">
  //               By {dailyAuthor}
  //             </div>
  //           </Link>
  //         </div>
  //         <Link to="/subscribe" className="daily-wordcross-info-text-wrapper">
  //           Want to play online?&nbsp;<span className="emphatic">Subscribe today!</span>
  //         </Link>
  //       </div>
  //     )
  //   } else {
  //     return(
  //       <div className="dashboard-section daily-wordcross">
  //         <div className="dashboard-section-click-area"> 
  //             <Link 
  //               to={{
  //                   pathname: `/daily/${dailyDate}`,
  //                   state: {
  //                     referringComponent: 'dashboard',
  //                     wordcrossCategory: dailyType,
  //                     today: today,
  //                     // wordcrossDataSet: dailyDataSet
  //                   }
  //                 }}
  //                 style={{ textDecoration: 'none' }}
  //               >
  //             <div className={`wordcross-info-wrapper ${subscriber}`}>
  //                 <div className="daily-icon-wrapper">
  //                   <div className="wordcross-status-icon daily-status-icon active-icon" />
  //                   <div className="ribbon daily-ribbon play-ribbon">Play</div>
  //                 </div>
  //               <h3>The Wordcross</h3>
  //             </div>
  //             <div className={`wordcross-date-text-wrapper daily-date-text-wrapper ${subscriber}`}>
  //               {todaysFullDate}
  //             </div>
  //             <hr/>
  //             <div className="wordcross-byline">
  //               By {dailyAuthor}
  //             </div>
  //           </Link>
  //         </div>
  //         <div className="daily-wordcross-info-text-wrapper">
  //           Streak info goes here:&nbsp;<span className="emphatic">Woo Hoo!</span>
  //         </div>
  //       </div>
  //     )
  //   }
  // };

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
        <div className="dashboard-wordnerd-text-wrapper">
          <a className="dashboard-read-wordnerd-text">
            Read about today's puzzle on Wordnerd
          </a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);