import * as APIUtil from "../util/daily_api_util";

export const RECEIVE_DAILY_AUTHOR = "RECEIVE_DAILY_AUTHOR";

export const receiveDailyAuthor = (daily_author) => ({
  type: RECEIVE_DAILY_AUTHOR,
  daily_author
});

export const fetchDailyAuthor = (wordcross_date) => (dispatch) => {
  APIUtil.fetchDailyAuthor(wordcross_date).then((daily_author) => 
    dispatch(receiveDailyAuthor(daily_author))
  );
}