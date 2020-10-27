import RECEIVE_MICRO from '../actions/micro_actions';

const microReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_MICRO:
      return {user_micro: action.user_micro};
    default:
      return oldState;
  }
};

export default microReducer