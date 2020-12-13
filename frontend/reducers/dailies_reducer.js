import { RECEIVE_DAILY_AUTHOR } from "../actions/daily_actions";

const dailiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DAILY_AUTHOR:
      return Object.assign({}, state, action.daily_author);
    default:
      return state;
  }
};

export default dailiesReducer;
