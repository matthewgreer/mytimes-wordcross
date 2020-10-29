import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userMicrosReducer from './user_micros_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  user_micros: userMicrosReducer  
});

export default entitiesReducer;