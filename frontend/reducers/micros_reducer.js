import { FETCH_MICRO_START, RECEIVE_MICRO_SUCCESS, RECEIVE_MICRO_FAILURE } from "../actions/micro_actions";

const microsReducer = (state = {...{ isLoading: false }}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_MICRO_START:
      return { ...state, ...{ isLoading: true } };
    case RECEIVE_MICRO_SUCCESS:
      return { ...state, ...action.micro, ...{ isLoading: false } };
    case RECEIVE_MICRO_FAILURE:
      return { ...state, ...action.error, ...{ isLoading: false } };
    default:
      return state;
  }
};

export default microsReducer;
