import { connect } from "react-redux";
import { fetchUserMicro } from '../../actions/user_micro_actions'
import { updateUserMicro } from "../../util/user_micro_api_util";
import Wordcross from "./wordcross";

const msp = (state, ownProps) => ({
  userId: state.session.id,
  puzzleDate: ownProps.match.params.puzzle_date,
  puzzleType: 'Micro',
  puzzleDataSet: state.entities.userMicros.user_micro,
});

const mdp = dispatch => ({
  fetchPuzzle: (user_id, puzzle_date) => dispatch(fetchUserMicro(user_id, puzzle_date)),
  updatePuzzle: user_micro => dispatch(updateUserMicro(user_micro))
});

const UserMicroContainer = connect(msp, mdp)(Wordcross);

export default UserMicroContainer;