import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { subscribe } from '../../actions/session_actions'
import SessionForm from './session_form'

const msp = ({errors}) => ({
  errors: errors.session,
  formType: "Create Account",
  formTitle: "Create your free ",
  checkboxText: "You agree to receive updates and offers from The Trials. You may opt out anytime.",
  checkboxLink: `By creating an account, you agree to the ${<Link to="https://www.nytimes.com/content/help/rights/terms/terms-of-service.html">Terms of Service</Link>} and acknowledge our ${<Link to="https://www.nytimes.com/content/help/rights/privacy/policy/privacy-policy.html">Privacy Policy</Link>}.`,
  navLine: "Already ",
  navLink: <Link to="/login">Log In.</Link>
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(subscribe(user))
});

export default connect(msp, mdp)(SessionForm);