import React from 'react';


class UserMicro extends React.Component {
  constructor(props) {
    super(props);
 
    // this.state = {
    //   author: "",
    //   clueSet: [],
    //   id: null,
    //   microId: null,
    //   puzzleDate: this.props.puzzleDate,
    //   solution: [],
    //   solved: false,
    //   solvingState: [],
    //   timer: 0,
    //   userId: this.props.userId
    // }


    // This displays the ACTUAL DATE of the puzzle in the db

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

    this.today = new Date().toLocaleDateString(
      undefined, {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      }
    )

  };

  componentDidMount() {
    this.props.fetchUserMicro(
      this.props.userId,
      this.props.puzzleDate
    );
    
  }



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
            <header className="micro-puzzle-header">
              <div className="micro-puzzle-header-content-wrapper">
                <div className="micro-puzzle-header-title">The Micro Wordcross</div>
                {/* Displays todays date rather than puzzle's actual date */}
                <div className="micro-puzzle-header-date">{this.today}</div>
                <div>{this.props.userMicro.author}</div>
              </div>
            </header>
          </section>
      </main>
    );
  }

};

export default UserMicro;