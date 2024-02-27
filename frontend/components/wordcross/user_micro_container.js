import { connect } from "react-redux";
import {
  fetchUserMicro,
  updateUserMicro,
} from "../../actions/user_micro_actions";
import { fetchUserStat } from "../../actions/user_stat_actions";
import { updateUser } from "../../actions/session_actions";
import formatDate from "../body/format_date";
import Wordcross from "./wordcross";

const msp = (state, _ownProps) => {
  const currentUser = state.entities.users ? state.entities.users[state.session.id] : { id: state.session.id, email: "" };
  if(!state.entities.userMicros) {
    const date = formatDate(new Date());
    dispatch(fetchUserMicro(currentUser.id, date));
  }
  if(!state.entities.userStats) {
    dispatch(fetchUserStat(currentUser.id));
  }
  const wordcross = state.entities.userMicros;
  const micro = state.entities.micros;
  return {
    currentUser: currentUser,
    wordcrossType: "Micro",
    wordcross: { ...micro, ...wordcross },
    userStats: state.entities.userStats
  }
};

const mdp = (dispatch) => ({
  fetchWordcross: (userId, wordcrossDate) => {
    dispatch(fetchUserMicro(userId, wordcrossDate));
  },
  updateWordcross: (userMicro) => {
    dispatch(updateUserMicro(userMicro));
  },
  updateUser: (user) => dispatch(updateUser(user))
});

const UserMicroContainer = connect(msp, mdp)(Wordcross);

export default UserMicroContainer;
