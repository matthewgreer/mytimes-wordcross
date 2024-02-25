import * as APIUtil from "../util/micro_api_util";

export const RECEIVE_MICRO_AUTHOR = "RECEIVE_MICRO_AUTHOR";

export const receiveMicroAuthor = (microAuthor) => ({
  type: RECEIVE_MICRO_AUTHOR,
  microAuthor,
});

export const fetchMicroAuthor = (weekday) => (dispatch) => {
  APIUtil.fetchMicroAuthor(weekday).then((microAuthor) =>
    dispatch(receiveMicroAuthor(microAuthor))
  );
};
