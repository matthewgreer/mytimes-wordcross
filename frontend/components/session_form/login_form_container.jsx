import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions'
import SessionForm from './session_form'

const msp = ({ errors }) => ({
  errors: errors.session,
  formType: "login",
  navLink: <Link to="/subscribe">subscribe instead.</Link>
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);