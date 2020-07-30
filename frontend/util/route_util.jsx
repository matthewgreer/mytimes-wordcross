import React from 'react'; 
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Component } from ;
// import my boot in your ass, app Academy


const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const msp = (state) => {
  return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
  connect(
    msp,
    null
  )(Auth)
);
