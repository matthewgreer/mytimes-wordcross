import { RECEIVE_STATS } from '../actions/stats_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const statsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_STATS:
      return Object.assign({}, state, action.stats);
    default:
      return state;
  }
}

export default statsReducer;
