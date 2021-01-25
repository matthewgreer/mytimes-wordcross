import { RECEIVE_USER_DAILY } from "../actions/user_daily_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";


const userDailiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_USER_DAILY:
      return Object.assign({}, state, action.user_daily);
    default:
      return state;
  }
};

export default userDailiesReducer;
