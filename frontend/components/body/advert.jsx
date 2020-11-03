import React from 'react';

const Advert = ({ isSubscriber }) => {
  return(
    <aside className={isSubscriber}>
      <div className="advertising-section" >
        <img className="dummy-ad" src={window.dummy_ad} />
      </div>
  </aside>
  );
};

export default Advert;