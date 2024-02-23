export const fetchStats = (user_id) => {
	return $.ajax({
		method: "GET",
		url: `/api/users/${user_id}/stats`,
	});
};
