import * as APIUtil from "../util/user_stat_api_util";

export const FETCH_USER_STAT_START = "FETCH_USER_STAT_START";
export const UPDATE_USER_STAT_START = "UPDATE_USER_STAT_START";
export const RECEIVE_USER_STAT_SUCCESS = "RECEIVE_USER_STAT_SUCCESS";
export const RECEIVE_USER_STAT_FAILURE = "RECEIVE_USER_STAT_FAILURE";

export const fetchUserStatStart = () => ({
	type: FETCH_USER_STAT_START,
});

export const updateUserStatStart = () => ({
	type: UPDATE_USER_STAT_START
});

export const receiveUserStatSuccess = userStat => ({
	type: RECEIVE_USER_STAT_SUCCESS,
	userStat
});

export const receiveUserStatFailure = error => ({
	type: RECEIVE_USER_STAT_FAILURE,
	error
});

export const fetchUserStat = (userId) => (dispatch) => {
	dispatch(fetchUserStatStart());
	APIUtil.fetchUserStat(userId)
		.then((userStat) => dispatch(receiveUserStatSuccess(userStat)))
		.catch((error) => dispatch(receiveUserStatFailure(error)));
};

export const updateUserStat = (userStat) => dispatch => {
	dispatch(updateUserStatStart());
	APIUtil.updateUserStat(userStat)
		.then(userStat => {
			dispatch(receiveUserStatSuccess(userStat));
			return userStat;
		})
		.catch((error) => dispatch(receiveUserStatFailure(error)));
};
