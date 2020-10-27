import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import microsReducer from './micros_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  micros: microsReducer  
});

export default entitiesReducer;