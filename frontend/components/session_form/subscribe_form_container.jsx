import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { subscribe, login, clearSessionErrors } from '../../actions/session_actions'
import SessionForm from './session_form'

const msp = ({errors}) => ({
  errors: errors.session,
  bannerType: "main",
  formType: "Create Account",
  formTitle: "Create your free ",
  checkboxText: "You agree to receive updates and offers from The Trials. You may opt out anytime.",
  checkboxLink:
    <span>
      By creating an account, you agree to the&nbsp;
      {<Link to="https://www.nytimes.com/content/help/rights/terms/terms-of-service.html">Terms of Service</Link>} 
      &nbsp;and acknowledge our&nbsp; 
      {<Link to="https://www.nytimes.com/content/help/rights/privacy/policy/privacy-policy.html">Privacy Policy</Link>}.
    </span>,
  navLine: "Already ",
  navLink: <Link to="/login" >Log In.</Link>
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(subscribe(user)),
  loginDemo: () => dispatch(login({
    email: "demo_user",
    password: "demo_user"
  })),
  clearErrors: () => dispatch(clearSessionErrors())
});

export default connect(msp, mdp)(SessionForm);