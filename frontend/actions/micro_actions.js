import * as APIUtil from "../util/micro_api_util";

export const RECEIVE_MICRO_AUTHOR = "RECEIVE_MICRO_AUTHOR";

export const receiveMicroAuthor = (micro_author) => ({
  type: RECEIVE_MICRO_AUTHOR,
  micro_author,
});

export const fetchMicroAuthor = (puzzle_date) => (dispatch) => {
  APIUtil.fetchMicroAuthor(puzzle_date).then((micro_author) =>
    dispatch(receiveMicroAuthor(micro_author))
  );
};
