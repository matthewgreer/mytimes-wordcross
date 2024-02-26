import * as APIUtil from "../util/daily_api_util";

export const RECEIVE_DAILY = "RECEIVE_DAILY";

export const receiveDaily = (daily) => ({
  type: RECEIVE_DAILY,
  daily
});

export const fetchDaily = (weekday) => (dispatch) => {
  APIUtil.fetchDaily(weekday).then((daily) =>
    dispatch(receiveDaily(daily))
  );
}
