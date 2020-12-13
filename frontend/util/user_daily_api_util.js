export const fetchUserDaily = (user_id, wordcross_date) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${user_id}/user_dailies/${wordcross_date}`,
  });
};

export const updateUserDaily = (user_daily) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user_daily.user_id}/user_dailies/${user_daily.id}`,
    data: { user_daily },
  });
};
