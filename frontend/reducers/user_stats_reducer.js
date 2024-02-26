import { RECEIVE_USER_STAT } from '../actions/user_stat_actions';
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const userStatsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.userStat);
    case RECEIVE_USER_STAT:
      return Object.assign({}, state, action.userStat);
    default:
      return state;
  }
}

export default userStatsReducer;
