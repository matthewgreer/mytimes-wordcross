import * as APIUtil from '../util/user_micro_api_util';

export const FETCH_USER_MICRO_START = "FETCH_USER_MICRO_START";
export const UPDATE_USER_MICRO_START = "UPDATE_USER_MICRO_START";
export const RECEIVE_USER_MICRO_SUCCESS = "RECEIVE_USER_MICRO_SUCCESS";
export const RECEIVE_USER_MICRO_FAILURE = "RECEIVE_USER_MICRO_FAILURE";

export const fetchUserMicroStart = () => ({
  type: FETCH_USER_MICRO_START,
});

export const receiveUserMicroSuccess = userMicro => ({
  type: RECEIVE_USER_MICRO_SUCCESS,
  userMicro
});

export const receiveUserMicroFailure = error => ({
  type: RECEIVE_USER_MICRO_FAILURE,
  error
});

export const fetchUserMicro = (userId, wordcrossDate) => (dispatch) => {
  dispatch(fetchUserMicroStart());
  APIUtil.fetchUserMicro(userId, wordcrossDate)
    .then((userMicro) => dispatch(receiveUserMicroSuccess(userMicro)))
    .catch((error) => dispatch(receiveUserMicroFailure(error)));
};

export const updateUserMicro = (userMicro) => (dispatch) => {
  dispatch({ type: UPDATE_USER_MICRO_START });
  APIUtil.updateUserMicro(userMicro)
    .then(userMicro => {
      dispatch(receiveUserMicroSuccess(userMicro));
      return userMicro;
    })
    .catch((error) => dispatch(receiveUserMicroFailure(error)));
};
