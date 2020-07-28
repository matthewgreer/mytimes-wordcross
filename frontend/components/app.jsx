import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SubscribeFormContainer from './session_form/subscribe_form_container';

const App = () => (
  <div>
    <header>
      <h2>This is the app.jsx rendering.</h2>
      <p>Below is the Greeting container:</p>
      <GreetingContainer />
    </header>

  <Route path="/login" component={LoginFormContainer} />
  <Route path="/subscribe" component={SubscribeFormContainer} />
  </div>
);

export default App;