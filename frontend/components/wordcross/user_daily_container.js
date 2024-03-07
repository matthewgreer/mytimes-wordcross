import { connect } from "react-redux";
import {
  fetchUserDaily,
  updateUserDaily,
} from "../../actions/user_daily_actions";
import { updateUser } from "../../actions/session_actions";
import { updateUserStat } from "../../actions/user_stat_actions";
import Wordcross from "./wordcross";

const msp = (state, ownProps) => {
  const currentUser = ownProps.currentUser || state.entities.user[state.session.id];
  const wordcross = state.entities.userDaily;
  const daily = state.entities.daily;
  return {
    currentUser: currentUser,
    isLoading: wordcross.isLoading,
    wordcrossType: "Daily",
    wordcross: { ...daily, ...wordcross },
    userStats: state.entities.userStats
  }
};

const mdp = dispatch => ({
  fetchWordcross: (userId, wordcrossDate) => dispatch(fetchUserDaily(userId, wordcrossDate)),
  updateWordcross: userDaily => dispatch(updateUserDaily(userDaily)),
  updateUser: user => dispatch(updateUser(user)),
  updateUserStat: userStat => dispatch(updateUserStat(userStat))
});

const UserDailyContainer = connect(msp, mdp)(Wordcross);

export default UserDailyContainer;
