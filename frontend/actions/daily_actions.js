import * as APIUtil from "../util/daily_api_util";

export const RECEIVE_DAILY_AUTHOR = "RECEIVE_DAILY_AUTHOR";

export const receiveDailyAuthor = (dailyAuthor) => ({
  type: RECEIVE_DAILY_AUTHOR,
  dailyAuthor
});

export const fetchDailyAuthor = (weekday) => (dispatch) => {
  APIUtil.fetchDailyAuthor(weekday).then((dailyAuthor) =>
    dispatch(receiveDailyAuthor(dailyAuthor))
  );
}
