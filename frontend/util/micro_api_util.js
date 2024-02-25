import { getCSRFToken } from "./csrf_api_util";

export const fetchMicroAuthor = (weekday) => {
  const token = getCSRFToken();
  return fetch(`/api/micros/${weekday}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
    },
  })
  .then(response =>  response.json())
  .catch(error => console.error("Error:", error));
}
