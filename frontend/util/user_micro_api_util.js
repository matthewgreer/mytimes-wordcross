export const fetchUserMicro = (user_id, wordcross_date) => $.ajax({
  method: 'GET',
  url: `/api/users/${user_id}/user_micros/${wordcross_date}`,
});

export const updateUserMicro = (user_micro) => $.ajax({
  method: 'PATCH',
  url: `/api/users/${user_micro.user_id}/user_micros/${user_micro.id}`,
  data: { user_micro }
});