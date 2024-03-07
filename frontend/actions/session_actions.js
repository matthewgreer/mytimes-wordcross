import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) =>({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});



export const subscribe = (user) => (dispatch) => (APIUtil.subscribe(user)
  .then(response => (dispatch(receiveCurrentUser(response.user))),
  err => (dispatch(receiveSessionErrors(err.responseJSON))))
);

export const updateUser = (user) => (dispatch) => (APIUtil.updateUser(user)
  .then(response => {
    dispatch(receiveCurrentUser(response.user));
    return response.user;
  })
);

export const login = (user) => (dispatch) => (APIUtil.login(user)
  .then(response => (dispatch(receiveCurrentUser(response.user))),
  err => (dispatch(receiveSessionErrors(err.responseJSON))))
);

export const logout = () => (dispatch) => (APIUtil.logout()
  .then(() => dispatch(logoutCurrentUser()))
);
