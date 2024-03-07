import { getCSRFToken } from "./csrf_api_util";

export const fetchMicro = (weekday) => {
  const token = getCSRFToken();
  return fetch(`/api/micros/${weekday}`, {
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
