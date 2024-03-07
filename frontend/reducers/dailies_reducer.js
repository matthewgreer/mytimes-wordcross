import { FETCH_DAILY_START, RECEIVE_DAILY_SUCCESS, RECEIVE_DAILY_FAILURE } from "../actions/daily_actions";

const dailiesReducer = (state = {...{ isLoading: false }}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_DAILY_START:
      return { ...state, ...{ isLoading: true } };
    case RECEIVE_DAILY_SUCCESS:
      return { ...state, ...action.daily, ...{ isLoading: false } };
    case RECEIVE_DAILY_FAILURE:
      return { ...state, ...action.error, ...{ isLoading: false } };
    default:
      return state;
  }
};

export default dailiesReducer;
