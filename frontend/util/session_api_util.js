import { getCSRFToken } from "./csrf_api_util";

export const subscribe = (user) => {
  const token = getCSRFToken();
  return fetch(`/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
    },
    body: JSON.stringify({ user }),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
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
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
}

export const login = (user) => {
  const token = getCSRFToken();
  return fetch(`/api/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
    },
    body: JSON.stringify({ user }),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
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
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
};
