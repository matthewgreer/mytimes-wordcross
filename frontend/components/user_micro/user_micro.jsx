// NOTE!!! this component has been replaced by Wordcross and should be
  // deleted (including its folder) when no longer needed for reference.

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

    // Display the ACTUAL DATE of the wordcross in the db if the user
      // navigates here from the archive page (don't know how to tell yet)
    this.date = new Date(
      Date.parse(this.props.wordcrossDate)
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
      // WordcrossHeader
        // TitleDate
        // Byline
        // Toolbar
          // (SettingsButton)
          // Timer
          // (RebusButton)
          // Reset_button
          // (PencilButton)
      // CurrentClue
      // WordcrossGrid
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
      this.props.wordcrossDate
    );
    // after this returns, I *think* setState should be called? but how do
      // I manage that asynchronously? .then? a promise (however that works)?
    // OR should fetchUserMicro be called beforehand when the Body
      // component mounts???

    // this.initializeState();
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
          <section className="micro-wordcross-page">
            <Modal modalType={this.state.renderModal} />
            <header className="micro-wordcross-header">
              <div className="micro-wordcross-header-content-wrapper">
                <div className="micro-wordcross-header-title">The Micro Wordcross</div>
                {/* Displays todays date rather than wordcross's actual date */}
                <div className="micro-wordcross-header-date">{this.today}</div> 
                {this.props.userMicro && 
                  <div className="micro-wordcross-header-byline">By {this.props.userMicro.author}</div>
                }
              </div>
            </header>
            <main className="micro-wordcross-">
              {/* <CurrentClue /> */}
              {/* <WordcrossGrid solvingState={this.state.solvingState} /> */}
              {/* <ClueList /> */}
            </main>
          </section>
      </main>
    );
  }

};

export default UserMicro;