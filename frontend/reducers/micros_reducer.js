import { RECEIVE_MICRO } from "../actions/micro_actions";
import { RECEIVE_USER_MICRO } from "../actions/user_micro_actions";

const microsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MICRO:
      return Object.assign({}, state, action.micro);
    case RECEIVE_USER_MICRO:
      return Object.assign({}, state, action.userMicro.micro)
    default:
      return state;
  }
};

export default microsReducer;
