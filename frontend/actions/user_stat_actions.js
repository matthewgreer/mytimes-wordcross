import * as APIUtil from "../util/user_stat_api_util";

export const RECEIVE_USER_STAT = "RECEIVE_USER_STAT";

export const receiveUserStat = userStat => ({
	type: RECEIVE_USER_STAT,
	userStat
});

export const fetchUserStat = (userId) => dispatch => (
	APIUtil.fetchUserStat(userId).then(userStat => {
		dispatch(receiveUserStat(userStat));
	})
);

export const updateUserStat = (userStat) => dispatch => (
	APIUtil.updateUserStat(userStat).then(userStat => {
		dispatch(receiveUserStat(userStat));
		return userStat;
	})
);
