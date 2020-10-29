import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BannerContainer from './banner/banner_container';
import FormBannerContainer from './banner/form_banner_container'
import LoginFormContainer from './session_form/login_form_container';
import SubscribeFormContainer from './session_form/subscribe_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import BodyContainer from './body/body_container';
import UserMicroContainer from './user_micro/user_micro_container';

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
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/subscribe" component={SubscribeFormContainer} />
            {/* Switch statement? */}
            <Route exact path="/" component={BodyContainer} />
            <ProtectedRoute exact path="/micro/:puzzle_date" component={UserMicroContainer} />
            <Redirect to="/" />
          </div>
      </div>
);

export default App;