import { connect } from "react-redux";
import {
  fetchUserDaily,
  updateUserDaily,
} from "../../actions/user_daily_actions";
import { fetchUserStat } from "../../actions/user_stat_actions";
import { updateUser } from "../../actions/session_actions";
import formatDate from "../body/format_date";
import Wordcross from "./wordcross";

const msp = (state, _ownProps) => {
  const currentUser = state.entities.users ? state.entities.users[state.session.id] : { id: state.session.id, email: "" };
  if(!state.entities.userDailies) {
    const date = formatDate(new Date());
    dispatch(fetchUserDaily(currentUser.id, date));
  }
  if(!state.entities.userStats) {
    dispatch(fetchUserStat(currentUser.id));
  }
  const wordcross = state.entities.userDailies;
  const daily = state.entities.dailies;
  return {
    currentUser: currentUser,
    wordcrossType: "Daily",
    wordcross: { ...daily, ...wordcross },
    userStats: state.entities.userStats
  }
};

const mdp = dispatch => ({
  fetchWordcross: (userId, wordcrossDate) => dispatch(fetchUserDaily(userId, wordcrossDate)),
  updateWordcross: userDaily => dispatch(updateUserDaily(userDaily)),
  updateUser: user => dispatch(updateUser(user))
});

const UserDailyContainer = connect(msp, mdp)(Wordcross);

export default UserDailyContainer;
