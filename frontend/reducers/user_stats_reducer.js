import { FETCH_USER_STAT_START, UPDATE_USER_STAT_START, RECEIVE_USER_STAT_SUCCESS, RECEIVE_USER_STAT_FAILURE } from '../actions/user_stat_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const userStatsReducer = (state = {...{ isLoading: false }}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case FETCH_USER_STAT_START, UPDATE_USER_STAT_START:
      return { ...state, ...{ isLoading: true } };
    case RECEIVE_USER_STAT_SUCCESS:
      return { ...state, ...action.userStat, ...{ isLoading: false } };
    case RECEIVE_USER_STAT_FAILURE:
      return { ...state, ...action.error, ...{ isLoading: false } };
    default:
      return state;
  }
}

export default userStatsReducer;
