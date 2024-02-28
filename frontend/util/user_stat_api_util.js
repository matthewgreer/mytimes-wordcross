import { getCSRFToken } from "./csrf_api_util";

export const fetchUserStat = (userStat) => {
	const token = getCSRFToken();
	return fetch(`/api/users/${userStat.userId}/user_stats`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"X-CSRF-Token": token,
		},
	})
	.then(response =>  response.json())
	.catch(error => console.error("Error:", error));
};

export const updateUserStat = (userStat) => {
	const token = getCSRFToken();
	return fetch(`/api/users/${userStat.userId}/user_stats`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			"X-CSRF-Token": token,
		},
		body: JSON.stringify({ userStat }),
	})
	.then(response =>  response.json())
	.catch(error => console.error("Error:", error));
}
