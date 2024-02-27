import { getCSRFToken } from "./csrf_api_util";

export const fetchUserMicro = (userId, wordcrossDate) => {
  const token = getCSRFToken();
  return fetch(`/api/users/${userId}/user_micros/${wordcrossDate}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
    },
  })
  .then(response =>  response.json())
  .catch(error => console.error("Error:", error));
};

export const updateUserMicro = (userMicro) => {
  const token = getCSRFToken();
  const payload = { user_micro: { ...userMicro }};
  return fetch(`/api/users/${userMicro.userId}/user_micros/${userMicro.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
    },
    body: JSON.stringify({ ...payload }),
  })
  .then(response =>  response.json())
  .catch(error => console.error("Error:", error));
};
