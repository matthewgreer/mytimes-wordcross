import React from 'react';
import Modal from '../wordcross/modal/modal';

class UserMicro extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      solved: false,
      solvingState: [],
      timer: 0
      // renderModal: "ready"
        // NOTE! this part of state can be set to:
          // "none", "ready", "paused", "incomplete", complete"
        // to determine what props to pass to <Modal> & <ModalButton>
    }

    // Display the ACTUAL DATE of the puzzle in the db if the user
      // navigates here from the archive page
    this.date = new Date(
      Date.parse(this.props.puzzleDate)
    );

    this.fullDate = this.date.toLocaleDateString(
      undefined, {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      }
    );

    // Display the current date if the user navigates here from the 
      // main splash page
    this.today = new Date().toLocaleDateString(
      undefined, {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      }
    )
  };

  // should I maybe abstract this page into several components?
    // Wordcross
      // PuzzleHeader
        // TitleDate
        // Byline
        // Toolbar
          // (SettingsButton)
          // Timer
          // (RebusButton)
          // Reset_button
          // (PencilButton)
      // CurrentClue
      // PuzzleGrid
      // ClueList



  componentDidMount() {
    this.props.fetchUserMicro(
      this.props.userId,
      this.props.puzzleDate
    );
    // or should fetchUserMicro be called beforehand in Body???
  };



  render() {
    return (
      <main>
        <div className="banner-buffer"></div>
          <aside className={this.isSubscriber}>
            <div className="advertising-section" >
              <img className="dummy-ad" src={window.dummy_ad} />
            </div>
          </aside>
          <section className="micro-puzzle-page">
            <Modal />
            <header className="micro-puzzle-header">
              <div className="micro-puzzle-header-content-wrapper">
                <div className="micro-puzzle-header-title">The Micro Wordcross</div>
                {/* Displays todays date rather than puzzle's actual date */}
                <div className="micro-puzzle-header-date">{this.today}</div>
                {/* <div>{this.props.userMicro.author}</div> */}
              </div>
            </header>
            <main className="micro-puzzle-">
              {/* <CurrentClue /> */}
              {/* <PuzzleGrid /> */}
              {/* <ClueList /> */}
            </main>
          </section>
      </main>
    );
  }

};

export default UserMicro;