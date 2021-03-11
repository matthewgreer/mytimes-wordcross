import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

const ERROR_MESSAGES = {
  "Please enter your username or email address.": "errorEmail",
  "Password is too short (minimum is 6 characters)": "errorPassword",
  "Please enter a password.": "errorPassword",
  "The email address and password you entered don't match any MYTimes account. Please try again.":
    "errorInvalidUser",
  "Please provide a password that is between 6 and 255 characters in length.":
    "errorPassword",
};

const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
        let key = ERROR_MESSAGES[error];
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