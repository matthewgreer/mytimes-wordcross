import * as APIUtil from "../util/stats_api_util";

export const RECEIVE_STATS = "RECEIVE_STATS";

export const receiveStats = stats => ({
	type: RECEIVE_STATS,
	stats
});

export const fetchStats = (user_id) => dispatch => (
	APIUtil.fetchStats(user_id).then(stats => {
		dispatch(receiveStats(stats));
	})
);
