import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const errorMessages = {
  'email_error': "Email can't be blank",
  'password_error': "Password is too short (minimum is 6 characters)",
  'invalid_user_error': "The email address and password you entered don't match any MYTrials account. Please try again."
}

const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};
  debugger
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      // if (action.errors != undefined) {
        action.errors.forEach(error => {
          newState[error] = errorMessages[error]
          // let key = errorMessages[error];
          //   newState[key] = error
        });
      // }
      return newState;
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;