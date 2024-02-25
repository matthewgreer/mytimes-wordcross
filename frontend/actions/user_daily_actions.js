import * as APIUtil from "../util/user_daily_api_util";

export const RECEIVE_USER_DAILY = "RECEIVE_USER_DAILY";

export const receiveUserDaily = userDaily => ({
  type: RECEIVE_USER_DAILY,
  userDaily
});

export const fetchUserDaily = (user_id, wordcross_date) => dispatch => (
  APIUtil.fetchUserDaily(user_id, wordcross_date).then(userDaily => {
    dispatch(receiveUserDaily(userDaily));
  })
);

export const updateUserDaily = (userDaily) => dispatch => (
  APIUtil.updateUserDaily(userDaily).then(userDaily => {
    dispatch(receiveUserDaily(userDaily));
    return userDaily;
  })
);
