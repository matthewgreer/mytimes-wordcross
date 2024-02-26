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
  .then(response =>  response.json())
  .catch(error => console.error("Error:", error));
};

export const updateUserDaily = (userDaily) => {
  const token = getCSRFToken();
  return fetch(`/api/users/${userDaily.userId}/user_dailies/${userDaily.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
    },
    body: JSON.stringify({ userDaily }),
  })
  .then(response =>  response.json())
  .catch(error => console.error("Error:", error));
};
