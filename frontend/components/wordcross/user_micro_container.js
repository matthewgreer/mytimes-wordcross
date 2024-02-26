import { connect } from "react-redux";
import {
  fetchUserMicro,
  updateUserMicro,
} from "../../actions/user_micro_actions";
import { updateUser } from "../../actions/session_actions";
import Wordcross from "./wordcross";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
  wordcrossType: "Micro",
  wordcross: state.entities.userMicros,
});

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
