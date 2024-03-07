import * as APIUtil from "../util/user_daily_api_util";

export const FETCH_USER_DAILY_START = "FETCH_USER_DAILY_START";
export const UPDATE_USER_DAILY_START = "UPDATE_USER_DAILY_START";
export const RECEIVE_USER_DAILY_SUCCESS = "RECEIVE_USER_DAILY_SUCCESS";
export const RECEIVE_USER_DAILY_FAILURE = "RECEIVE_USER_DAILY_FAILURE";

export const fetchUserDailyStart = () => ({
  type: FETCH_USER_DAILY_START,
});

export const receiveUserDailySuccess = userDaily => ({
  type: RECEIVE_USER_DAILY_SUCCESS,
  userDaily
});

export const receiveUserDailyFailure = error => ({
  type: RECEIVE_USER_DAILY_FAILURE,
  error
});

export const fetchUserDaily = (userId, wordcrossDate) => (dispatch) => {
  dispatch(fetchUserDailyStart());
  APIUtil.fetchUserDaily(userId, wordcrossDate)
    .then((userDaily) => dispatch(receiveUserDailySuccess(userDaily)))
    .catch((error) => dispatch(receiveUserDailyFailure(error)));
};

export const updateUserDaily = (userDaily) => (dispatch) => {
  dispatch({ type: UPDATE_USER_DAILY_START });
  APIUtil.updateUserDaily(userDaily)
    .then(userDaily => {
      dispatch(receiveUserDailySuccess(userDaily));
      return userDaily;
    })
    .catch((error) => dispatch(receiveUserDailyFailure(error)));
};
