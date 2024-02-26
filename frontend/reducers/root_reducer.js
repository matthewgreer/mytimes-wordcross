import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer'
import sessionReducer from './session_reducer'
import errorsReducer from './errors_reducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,  // users, userMicros, micros, userDailies, dailies, userStats
  session: sessionReducer,    // session
  errors: errorsReducer       // session_errors
})

export default rootReducer;
