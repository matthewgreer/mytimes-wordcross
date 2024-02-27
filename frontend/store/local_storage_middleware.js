import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
// import { RECEIVE_USER_DAILY } from "../actions/user_daily_actions";
// import { RECEIVE_USER_MICRO } from "../actions/user_micro_actions";
// import { RECEIVE_DAILY } from "../actions/daily_actions";
// import { RECEIVE_MICRO } from "../actions/micro_actions";
import { RECEIVE_USER_STAT } from "../actions/user_stat_actions";

// This function will parse any existing "wordcross" localStorage data and rewrite it with the new key-value pair.
// This pattern of overwriting existing data is intentional. We want to keep only the most recent store updates in localStorage.
const updateLocalStorage = (key, value) => {
  const wordcrossDataStoredLocally = JSON.parse(localStorage.getItem("wordcross")) || {};
  wordcrossDataStoredLocally[key] = value;
  try {
    localStorage.setItem("wordcross", JSON.stringify(wordcrossDataStoredLocally));
  } catch (e) {
    console.error("Error updating localStorage.", e);
  }
};

// This middleware will listen for the actions that are dispatched to the store and persist the data to localStorage.
// This way, if the user refreshes the page, the puzzle data will still be available to render.
// In future, I'll explore Redux-Persist or at least pare down to persist the very minimum amount of wordcross data needed to re-render after a user refresh -- it may be that the userId is all we need.

const localStorageMiddleware = _store => next => action => {
    const result = next(action);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        console.log(action);
        updateLocalStorage( "userId", action.user.id);
        return result;
      // For the time being I'm going to try to refresh the data using only the userId from localStorage.
      // case RECEIVE_USER_DAILY:
      //   updateLocalStorage("userDaily", action.userDaily);
      //   updateLocalStorage("daily", action.daily);
      //   return result;
      // case RECEIVE_USER_MICRO:
      //   updateLocalStorage("userMicro", action.userMicro);
      //   updateLocalStorage("micro", action.micro);
      //   return result;
      // case RECEIVE_DAILY:
      //   updateLocalStorage("daily", action.daily);
      //   return result;
      // case RECEIVE_MICRO:
      //   updateLocalStorage("micro", action.micro);
      //   return result;
      case RECEIVE_USER_STAT:
        updateLocalStorage("userStat", action.userStat);
        return result;
      // NOTE that on logout, we want to clear the localStorage. We aren't persisting it beyond the session, because a new login will trigger a new fetch of the most current data persisted in the database. No need to persist stale data.
      case LOGOUT_CURRENT_USER:
        localStorage.removeItem("wordcross");
        return result;
    }
}

export default localStorageMiddleware;
