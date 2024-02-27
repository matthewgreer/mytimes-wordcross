import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import BannerContainer from './banner/banner_container';
import FormBannerContainer from './banner/form_banner_container'
import LoginFormContainer from './session_form/login_form_container';
import SubscribeFormContainer from './session_form/subscribe_form_container';
import BodyContainer from './body/body_container';


const App = () => (
    <div className="app-wrapper">
          <div className="page-header-container">
            <div className="header-wrapper">
              <Switch>
                <AuthRoute exact path="/login" component={FormBannerContainer} />
                <AuthRoute exact path="/subscribe" component={FormBannerContainer} />
                <Route component={BannerContainer} />
              </Switch>
            </div>
          </div>
          <div className="body-container">
            <Switch>
              <AuthRoute exact path="/login" component={LoginFormContainer} />
              <AuthRoute exact path="/subscribe" component={SubscribeFormContainer} />
              <Route path="/" component={BodyContainer} />
              <Redirect to="/" />
            </Switch>
          </div>
      </div>
);

export default App;
