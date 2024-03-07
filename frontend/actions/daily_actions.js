import * as APIUtil from "../util/daily_api_util";

export const FETCH_DAILY_START = "RECEIVE_DAILY_START";
export const RECEIVE_DAILY_SUCCESS = "RECEIVE_DAILY_SUCCESS";
export const RECEIVE_DAILY_FAILURE = "RECEIVE_DAILY_FAILURE";

export const fetchDailyStart = () => ({
  type: FETCH_DAILY_START,
});

export const receiveDailySuccess = (daily) => ({
  type: RECEIVE_DAILY_SUCCESS,
  daily
});

export const receiveDailyFailure = (error) => ({
  type: RECEIVE_DAILY_FAILURE,
  error
});

export const fetchDaily = (weekday) => (dispatch) => {
  dispatch(fetchDailyStart());
  APIUtil.fetchDaily(weekday)
    .then((daily) => dispatch(receiveDailySuccess(daily)))
    .catch((error) => dispatch(receiveDailyFailure(error)));
};
