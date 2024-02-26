import { RECEIVE_MICRO } from "../actions/micro_actions";

const microsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MICRO:
      return Object.assign({}, state, action.micro);
    default:
      return state;
  }
};

export default microsReducer;