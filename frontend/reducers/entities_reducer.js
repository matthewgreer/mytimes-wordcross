import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userDailiesReducer from './user_dailies_reducer';
import userMicrosReducer from './user_micros_reducer';
import microsReducer from './micros_reducer';
import dailiesReducer from './dailies_reducer';
import userStatsReducer from './user_stats_reducer';

const entitiesReducer = combineReducers({
  user: usersReducer,
  userDaily: userDailiesReducer,
  daily: dailiesReducer,
  userMicro: userMicrosReducer,
  micro: microsReducer,
  userStats: userStatsReducer,
});

export default entitiesReducer;
