import React from 'react';
import { Link } from 'react-router-dom';

class Micro extends React.Component {
  constructor(props) {
    super(props);






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
          <section>
            <h1>WOO HOO IT'S A MICRO PAGE</h1>
          </section>
      </main>
    );
  }

};

export default Micro;