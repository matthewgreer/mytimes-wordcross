import { getCSRFToken } from "./csrf_api_util";

export const fetchUserDaily = (userId, wordcrossDate) => {
  const token = getCSRFToken();
  return fetch(`/api/users/${userId}/user_dailies/${wordcrossDate}`, {
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

export const updateUserDaily = (userDaily) => {
  const payload = { user_daily: { ...userDaily }}
  const token = getCSRFToken();
  return fetch(`/api/users/${userDaily.userId}/user_dailies/${userDaily.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
    },
    body: JSON.stringify({ ...payload }),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
};
