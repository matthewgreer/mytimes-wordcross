import * as APIUtil from "../util/micro_api_util";

export const RECEIVE_MICRO = "RECEIVE_MICRO";

export const receiveMicro = (micro) => ({
  type: RECEIVE_MICRO,
  micro,
});

export const fetchMicro = (weekday) => (dispatch) => {
  APIUtil.fetchMicro(weekday).then((micro) =>
    dispatch(receiveMicro(micro))
  );
};
