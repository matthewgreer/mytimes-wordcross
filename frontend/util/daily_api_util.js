export const fetchDailyAuthor = (wordcross_date) =>
  $.ajax({
    method: "GET",
    url: `/api/dailies/${wordcross_date}`,
  });
