import { RECEIVE_DAILY } from "../actions/daily_actions";

const dailiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DAILY:
    default:
      return state;
  }
};

export default dailiesReducer;
