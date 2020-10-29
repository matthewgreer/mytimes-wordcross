import { connect } from "react-redux";
import { fetchUserMicro } from '../../actions/user_micro_actions'
import { updateUserMicro } from "../../util/user_micro_api_util";
import UserMicro from "../user_micro/user_micro";

const msp = (state, ownProps) => ({
  user_id: state.session.id,
  puzzle_date: ownProps.match.params.puzzle_date
});

const mdp = dispatch => ({
  fetchUserMicro: (user_id, puzzle_date) => dispatch(fetchUserMicro(user_id, puzzle_date)),
  updateUserMicro: user_micro => dispatch(updateUserMicro(user_micro))
});

const UserMicroContainer = connect(msp, mdp)(UserMicro);

export default UserMicroContainer;