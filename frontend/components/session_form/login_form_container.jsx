import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions'
import SessionForm from './session_form'

// checkboxLink to password reset needs route to be created

const msp = ({ errors }) => ({
  errors: errors.session,
  formType: "login",
  formTitle: "Log in to your ",
  checkboxText: "Remember me",
  checkboxLink: <Link to="/">Forgot your password?</Link>,
  navLine: "Don't ",
  navLink: <Link to="/subscribe">Create one</Link>
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);