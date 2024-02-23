import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userDailiesReducer from './user_dailies_reducer';
import userMicrosReducer from './user_micros_reducer';
import microsReducer from './micros_reducer';
import dailiesReducer from './dailies_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  userDailies: userDailiesReducer,
  dailies: dailiesReducer,
  userMicros: userMicrosReducer,
  micros: microsReducer,
});

export default entitiesReducer;
