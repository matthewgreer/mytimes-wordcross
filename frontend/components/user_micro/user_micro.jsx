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
          // "none", "ready", "paused", "incorrect", complete"
        // to determine what props to pass to <Modal> & <ModalButton>
    }

    // Display the ACTUAL DATE of the puzzle in the db if the user
      // navigates here from the archive page (don't know how to tell yet)
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

    // this.initializeState = this.initializeState.bind(this);
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
        // Square
      // ClueList
        // Clue


  // initializeState() {
  //   this.setState((state) => {
  //     return {
  //       solved: this.props.userMicro.solved,
  //       solvingState: this.props.userMicro.solvingState,
  //       timer: this.propsl.userMicro.timer
  //     }
  //   });
  // }

  componentDidMount() {
    this.props.fetchUserMicro(
      this.props.userId,
      this.props.puzzleDate
    );
    // after this returns, I *think* setState should be called? but how do
      // I manage that asynchronously? .then? a promise (however that works)?
    // OR should fetchUserMicro be called beforehand when the Body
      // component mounts???

    // this.initializeState();
  };
  
  render() {
    debugger
    return (
      <main>
        <div className="banner-buffer"></div>
          <aside className={this.isSubscriber}>
            <div className="advertising-section" >
              <img className="dummy-ad" src={window.dummy_ad} />
            </div>
          </aside>
          <section className="micro-puzzle-page">
            <Modal modalType={this.state.renderModal} />
            <header className="micro-puzzle-header">
              <div className="micro-puzzle-header-content-wrapper">
                <div className="micro-puzzle-header-title">The Micro Wordcross</div>
                {/* Displays todays date rather than puzzle's actual date */}
                <div className="micro-puzzle-header-date">{this.today}</div> 
                {this.props.userMicro && 
                  <div className="micro-puzzle-header-byline">By {this.props.userMicro.author}</div>
                }
              </div>
            </header>
            <main className="micro-puzzle-">
              {/* <CurrentClue /> */}
              {/* <PuzzleGrid solvingState={this.state.solvingState} /> */}
              {/* <ClueList /> */}
            </main>
          </section>
      </main>
    );
  }

};

export default UserMicro;