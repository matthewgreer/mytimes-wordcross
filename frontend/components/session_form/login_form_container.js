import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions'
import SessionForm from './session_form'

const msp = ({ errors }) => ({
  errors: errors.session,
  formType: "Log In",
  formTitle: "Log in to your ",
  checkboxText: "Remember me",
  checkboxLink: <Link to="/">Forgot your password?</Link>,
  navLine: "Don't ",
  navLink: <Link to="/subscribe" >Create one</Link>
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  loginDemo: () => dispatch(login({
    email: "demo_user",
    password: "demo_user"
  })),
  clearErrors: () => dispatch(clearSessionErrors())
});

const LoginFormContainer = connect(msp, mdp)(SessionForm);
export default LoginFormContainer;
