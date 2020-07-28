import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { subscribe } from '../../actions/session_actions'
import SessionForm from './session_form'

const msp = ({errors}) => ({
  errors: errors.session,
  formType: "subscribe",
  navLink: <Link to="/login">Log In instead.</Link>
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(subscribe(user))
});

export default connect(msp, mdp)(SessionForm);