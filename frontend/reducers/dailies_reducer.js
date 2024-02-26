import { RECEIVE_DAILY } from "../actions/daily_actions";
import { RECEIVE_USER_DAILY } from "../actions/user_daily_actions";

const dailiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DAILY:
      return Object.assign({}, state, action.daily);
    case RECEIVE_USER_DAILY:
      return Object.assign({}, state, action.userDaily.daily);
    default:
      return state;
  }
};

export default dailiesReducer;
