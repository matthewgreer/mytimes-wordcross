import React from 'react';
import { Link } from 'react-router-dom';

class Micro extends React.Component {
  constructor(props) {
    super(props);

    // this.date = this.props.user_micro.puzzle_date;




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
            <header className="micro-puzzle-header">
              <div className="micro-puzzle-header-content-wrapper">
                <div className="micro-puzzle-header-title">The Micro Wordcross</div>
                <div></div>
              </div>
            </header>
          </section>
      </main>
    );
  }

};

export default Micro;