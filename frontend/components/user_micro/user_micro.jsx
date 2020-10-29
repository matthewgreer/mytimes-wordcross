import React from 'react';
import { Link } from 'react-router-dom';

class UserMicro extends React.Component {
  constructor(props) {
    super(props);
 
    this.micro_puzzle = this.props.fetchUserMicro(
        this.props.user_id,
        this.props.puzzle_date
    );

    this.date = new Date(
      Date.parse(this.props.puzzle_date)
    );

    this.fullDate = this.date.toLocaleDateString(
      undefined, {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      }
    );

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
            <header className="micro-puzzle-header">
              <div className="micro-puzzle-header-content-wrapper">
                <div className="micro-puzzle-header-title">The Micro Wordcross</div>
                <div className="micro-puzzle-header-date"></div>
              </div>
            </header>
          </section>
      </main>
    );
  }

};

export default UserMicro;