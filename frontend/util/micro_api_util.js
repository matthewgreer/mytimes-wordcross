export const fetchMicroAuthor = (puzzle_date) =>
  $.ajax({
    method: "GET",
    url: `/api/micros/${puzzle_date}`,
  });
