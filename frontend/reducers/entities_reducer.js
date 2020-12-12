import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userMicrosReducer from './user_micros_reducer';
import microsReducer from './micros_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  userMicros: userMicrosReducer,
  micros: microsReducer
});

export default entitiesReducer;