import { getCSRFToken } from "./csrf_api_util";

export const subscribe = user => {
  const token = getCSRFToken();
  return fetch(`/api/users/${user.id}/subscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
    },
    body: JSON.stringify({ user }),
  })
  .then(response =>  response.json())
  .catch(error => console.error("Error:", error));
}

export const updateUser = (user) => {
  const token = getCSRFToken();
  return fetch(`/api/users/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
    },
    body: JSON.stringify({ user }),
  })
  .then(response =>  response.json())
  .catch(error => console.error("Error:", error));
}

export const login = user => {
  const token = getCSRFToken();
  return fetch(`/api/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
    },
    body: JSON.stringify({ user }),
  })
  .then(response =>  response.json())
  .catch(error => console.error("Error:", error));
};

export const logout = () => {
  const token = getCSRFToken();
  return fetch(`/api/session`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
    },
  })
  .then(response =>  response.json())
  .catch(error => console.error("Error:", error));
};
