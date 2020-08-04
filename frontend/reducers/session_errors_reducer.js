import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const errorMessages = {
  'email_error': "Please enter your username or email address.",
  'password_error': "Please enter a password",
  'invalid_user_error': "The email address and password you entered don't match any MYTrials account. Please try again."
}

const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
        action.errors.forEach(error => {
          newState[error] = errorMessages[error]
        });
      return newState;
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;