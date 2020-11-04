import { RECEIVE_MICRO_AUTHOR } from "../actions/micro_actions";

const microsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MICRO_AUTHOR:
      return Object.assign({}, state, action.micro_author);
    default:
      return state;
  }
};

export default microsReducer;