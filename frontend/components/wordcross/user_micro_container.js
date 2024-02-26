import { connect } from "react-redux";
import {
  fetchUserMicro,
  updateUserMicro,
} from "../../actions/user_micro_actions";
import { updateUser } from "../../actions/session_actions";
import Wordcross from "./wordcross";

const msp = (state, ownProps) => ({
  // userId: state.session.id,
  currentUser: state.entities.users[state.session.id],
  wordcrossDate: ownProps.match.params.wordcross_date,
  wordcrossType: "Micro",
  wordcrossDataSet: state.entities.userMicros.user_micro,
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
