import React from 'react';
import { Route } from 'react-router-dom';
import BannerContainer from './banner/banner_container';
import LoginFormContainer from './session_form/login_form_container';
import SubscribeFormContainer from './session_form/subscribe_form_container';

const App = () => (
    <div className="app-wrapper">
          <div className="page-header-container">
            <h2>App.jsx rendering page header.</h2>
            <div className="header-wrapper">
              <BannerContainer />
            </div>
          </div>
          <div className="body-container">
            <h2>App.jsx rendering page header.</h2>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/subscribe" component={SubscribeFormContainer} />
          </div>
      </div>
);

export default App;