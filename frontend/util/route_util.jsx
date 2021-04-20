import React from 'react'; 
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// renders component if logged out, otherwise redirects to the root url
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      !loggedIn ? (
        <Component {...props} />
        ) : (
        <Redirect to="/" />
        )
    )} />
);

// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    path={path} 
    exact={exact} 
    render={(props) => (
      loggedIn ? (
        <Component {...props} />
    ) : (
        <Redirect to="/login" />
    )
  )} />
);

// access the Redux state to check if the user is logged in
const msp = (state) => {
  return { loggedIn: Boolean(state.session.id) };
};

// connect Auth & Protected to the redux state
export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectedRoute = withRouter(connect(msp, null)(Protected));