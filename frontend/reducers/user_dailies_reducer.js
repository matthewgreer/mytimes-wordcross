import { FETCH_USER_DAILY_START, UPDATE_USER_DAILY_START, RECEIVE_USER_DAILY_SUCCESS, RECEIVE_USER_DAILY_FAILURE } from '../actions/user_daily_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const userDailysReducer = (state = { ...{ isLoading: false } }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case FETCH_USER_DAILY_START, UPDATE_USER_DAILY_START:
      return { ...state, ...{ isLoading: true } };
    case RECEIVE_USER_DAILY_SUCCESS:
      return { ...state, ...action.userDaily, ...{ isLoading: false } };
    case RECEIVE_USER_DAILY_FAILURE:
      return { ...state, ...action.error, ...{ isLoading: false } };
    default:
      return state;
  }
};

export default userDailysReducer;
