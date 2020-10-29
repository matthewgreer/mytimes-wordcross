import { RECEIVE_USER_MICRO } from '../actions/user_micro_actions';

const userMicrosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_MICRO:
      return Object.assign({}, state, action.user_micro);
    default:
      return state;
  }
};

export default userMicrosReducer;