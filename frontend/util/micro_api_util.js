export const fetchMicroAuthor = (wordcross_date) =>
  $.ajax({
    method: "GET",
    url: `/api/micros/${wordcross_date}`,
  });
