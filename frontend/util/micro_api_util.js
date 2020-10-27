export const fetchMicro = (user, puzzle_date) => $.ajax({
  method: 'GET',
  url: `/api/users/${user.id}/user_micros/${puzzle_date}`,
  data: { user, puzzle_date }
});

export const updateMicro = (user_micro) => $.ajax({
  method: 'PATCH',
  url: `/api/users/${user_micro.user_id}/user_micros/${user_micro.id}`,
  data: { user_micro }
});