import React from 'react';

const Advert = () => {

  const redirectToWaylon = () => {
    return window.open("https://matthewgreer.github.io/waylon/", " ")
  }
  
  return(
    <aside>
      <div className="advertising-section" >
        <img 
          className="waylon-ad" 
          src={window.waylon_ad} 
          onClick={redirectToWaylon}
        />
      </div>
    </aside>
  );
};

export default Advert;