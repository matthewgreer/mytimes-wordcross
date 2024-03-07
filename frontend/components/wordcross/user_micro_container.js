import { connect } from "react-redux";
import {
  fetchUserMicro,
  updateUserMicro,
} from "../../actions/user_micro_actions";
import { fetchUserStat } from "../../actions/user_stat_actions";
import { updateUser } from "../../actions/session_actions";
import formatDate from "../body/format_date";
import Wordcross from "./wordcross";

const msp = (state, ownProps) => {
  const currentUser = ownProps.currentUser || state.entities.user[state.session.id];
  const wordcross = state.entitiesuserMicro;
  const micro = state.entities.micro;
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
