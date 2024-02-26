import { RECEIVE_USER_MICRO } from '../actions/user_micro_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const userMicrosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_USER_MICRO:
      return Object.assign({}, state, action.userMicro.userMicro);
    default:
      return state;
  }
};

export default userMicrosReducer;
