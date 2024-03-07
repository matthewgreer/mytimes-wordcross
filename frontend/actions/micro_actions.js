import * as APIUtil from "../util/micro_api_util";

export const FETCH_MICRO_START = "FETCH_MICRO_START";
export const RECEIVE_MICRO_SUCCESS = "RECEIVE_MICRO_SUCCESS";
export const RECEIVE_MICRO_FAILURE = "RECEIVE_MICRO_FAILURE";

export const fetchMicroStart = () => ({
  type: FETCH_MICRO_START,
});

export const receiveMicroSuccess = (micro) => ({
  type: RECEIVE_MICRO_SUCCESS,
  micro,
});

export const receiveMicroFailure = (error) => ({
  type: RECEIVE_MICRO_FAILURE,
  error,
});

export const fetchMicro = (weekday) => (dispatch) => {
  dispatch(fetchMicroStart());
  APIUtil.fetchMicro(weekday)
    .then((micro) => dispatch(receiveMicroSuccess(micro)))
    .catch((error) => dispatch(receiveMicroFailure(error)));
};
