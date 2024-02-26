import { connect } from "react-redux";
import {
  fetchUserDaily,
  updateUserDaily,
} from "../../actions/user_daily_actions";
import { updateUser } from "../../actions/session_actions";

import Wordcross from "./wordcross";

const msp = (state, ownProps) => ({
  // userId: state.session.id,
  currentUser: state.entities.users[state.session.id],
  wordcrossType: "Daily",
  wordcross: state.entities.userDailies,
});

const mdp = dispatch => ({
  fetchWordcross: (userId, wordcrossDate) => dispatch(fetchUserDaily(userId, wordcrossDate)),
  updateWordcross: userDaily => dispatch(updateUserDaily(userDaily)),
  updateUser: user => dispatch(updateUser(user))
});

const UserDailyContainer = connect(msp, mdp)(Wordcross);

export default UserDailyContainer;
