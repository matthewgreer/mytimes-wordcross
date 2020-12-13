import * as APIUtil from "../util/user_daily_api_util";

export const RECEIVE_USER_DAILY = "RECEIVE_USER_DAILY";

export const receiveUserDaily = user_daily => ({
  type: RECEIVE_USER_DAILY,
  user_daily
});

export const fetchUserDaily = (user_id, wordcross_date) => dispatch => (
  APIUtil.fetchUserDaily(user_id, wordcross_date).then(user_daily => {
    dispatch(receiveUserDaily(user_daily));
  })
);

export const updateUserDaily = (user_daily) => dispatch => (
  APIUtil.updateUserDaily(user_daily).then(user_daily => {
    dispatch(receiveUserDaily(user_daily));
  })
);