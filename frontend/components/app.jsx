import React from 'react';
import { Route } from 'react-router-dom';
import BannerContainer from './banner/banner_container';
import LoginFormContainer from './session_form/login_form_container';
import SubscribeFormContainer from './session_form/subscribe_form_container';

const App = () => (
  <div>
    <header>
      <h2>App.jsx rendering page header.</h2>
      <BannerContainer />
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/subscribe" component={SubscribeFormContainer} />
  </div>
);

export default App;