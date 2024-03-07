import { getCSRFToken } from "./csrf_api_util";

export const fetchUserStat = (userId) => {
	const token = getCSRFToken();
	return fetch(`/api/users/${userId}/user_stats`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"X-CSRF-Token": token,
		},
	})
	.then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
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
	.then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
}
