import * as APIUtil from '../util/user_micro_api_util';

export const RECEIVE_USER_MICRO = "RECEIVE_USER_MICRO";

export const receiveUserMicro = user_micro => ({
  type: RECEIVE_USER_MICRO,
  user_micro
});

export const fetchUserMicro = (user_id, wordcross_date) => dispatch => (
  APIUtil.fetchUserMicro(user_id, wordcross_date).then(user_micro => {
    dispatch(receiveUserMicro(user_micro));
  })
);

export const updateUserMicro = (user_micro) => dispatch => (
  APIUtil.updateUserMicro(user_micro).then(user_micro => {
    dispatch(receiveUserMicro(user_micro));
    return user_micro;
  })
);