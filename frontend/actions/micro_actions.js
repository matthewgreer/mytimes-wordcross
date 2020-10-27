import * as APIUtil from '../util/micro_api_util';

export const RECEIVE_MICRO = "RECEIVE_MICRO";

export const receiveMicro = micro => ({
  type: RECEIVE_MICRO,
  micro
});

export const fetchMicro = (user, puzzle_date) => dispatch => {
  APIUtil.fetchMicro(user, puzzle_date).then(micro => (
    dispatch(receiveMicro(micro))
  ))
};

export const updateMicro = (user_micro) => dispatch => {
  APIUtil.updateMicro(user_micro).then(micro => (
    dispatch(receiveMicro(micro))
  ))
};
