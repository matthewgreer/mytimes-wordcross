const { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER 
} = require("../actions/session_actions");

// const _nullUsers = {};

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(
        {}, 
        oldState, 
        { [action.user.id]: action.user }
      );
    case LOGOUT_CURRENT_USER:
      // return _nullUsers;
      return {};
    default:
      return oldState;
  }
};

export default usersReducer