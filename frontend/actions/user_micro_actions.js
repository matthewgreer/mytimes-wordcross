import * as APIUtil from '../util/user_micro_api_util';

export const RECEIVE_USER_MICRO = "RECEIVE_USER_MICRO";

export const receiveUserMicro = userMicro => ({
  type: RECEIVE_USER_MICRO,
  userMicro
});

export const fetchUserMicro = (userId, wordcrossDate) => dispatch => (
  APIUtil.fetchUserMicro(userId, wordcrossDate).then(userMicro => {
    dispatch(receiveUserMicro(userMicro));
  })
);

export const updateUserMicro = (userMicro) => dispatch => (
  APIUtil.updateUserMicro(userMicro).then(userMicro => {
    dispatch(receiveUserMicro(userMicro));
    return userMicro;
  })
);
