import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userDailiesReducer from './user_dailies_reducer';
import userMicrosReducer from './user_micros_reducer';
import microsReducer from './micros_reducer';
import dailiesReducer from './dailies_reducer';
import userStatsReducer from './user_stats_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  userDailies: userDailiesReducer,
  dailies: dailiesReducer,
  userMicros: userMicrosReducer,
  micros: microsReducer,
  userStats: userStatsReducer,
});

export default entitiesReducer;
