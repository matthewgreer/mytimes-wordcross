import { FETCH_USER_MICRO_START, UPDATE_USER_MICRO_START, RECEIVE_USER_MICRO_SUCCESS, RECEIVE_USER_MICRO_FAILURE } from '../actions/user_micro_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const userMicrosReducer = (state = {...{ isLoading: false }}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case FETCH_USER_MICRO_START, UPDATE_USER_MICRO_START:
      return { ...state, ...{ isLoading: true } };
    case RECEIVE_USER_MICRO_SUCCESS:
      return { ...state, ...action.userMicro, ...{ isLoading: false } };
    case RECEIVE_USER_MICRO_FAILURE:
      return { ...state, ...action.error, ...{ isLoading: false } };
    default:
      return state;
  }
};

export default userMicrosReducer;
