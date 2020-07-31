import React from 'react';
import { Route } from 'react-router-dom';
import BannerContainer from './banner/banner_container';
import LoginFormContainer from './session_form/login_form_container';
import SubscribeFormContainer from './session_form/subscribe_form_container';
import { AuthRoute } from '../util/route_util'

const App = () => (
    <div className="app-wrapper">
          <div className="page-header-container">
            <div className="header-wrapper">
              <BannerContainer />
            </div>
          </div>
          <div className="body-container">
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/subscribe" component={SubscribeFormContainer} />
          </div>
      </div>
);

export default App;