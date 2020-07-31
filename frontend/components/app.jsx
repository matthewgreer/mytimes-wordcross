import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BannerContainer from './banner/banner_container';
import FormBannerContainer from './banner/form_banner_container'
import LoginFormContainer from './session_form/login_form_container';
import SubscribeFormContainer from './session_form/subscribe_form_container';
import { AuthRoute } from '../util/route_util'

const App = () => (
    <div className="app-wrapper">
          <div className="page-header-container">
            <div className="header-wrapper">
              <Switch>
                <AuthRoute path="/login" component={FormBannerContainer} />
                <AuthRoute path="/subscribe" component={FormBannerContainer} />
                <Route component={BannerContainer} />
              </Switch>
            </div>
          </div>
          <div className="body-container">
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/subscribe" component={SubscribeFormContainer} />
          </div>
      </div>
);

export default App;