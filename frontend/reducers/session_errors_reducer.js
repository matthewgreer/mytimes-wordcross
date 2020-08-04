import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

const defaultErrorMessages = {}

const errorMessages = {
  "Please enter your username or email address.": 'email_error',
  "Password is too short (minimum is 6 characters)": 'password_error',
  "Please enter a password.": 'password_error',
  "The email address and password you entered don't match any MYTrials account. Please try again.": 'invalid_user_error',
  "Please provide a password that is between 6 and 255 characters in length.": 'password_error'
}

const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
        action.errors.forEach(error => {
          let key = errorMessages[error]
          newState[key] = error
        });
      return newState
    case RECEIVE_CURRENT_USER:
      return {};
    case CLEAR_SESSION_ERRORS:
      return {};
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;