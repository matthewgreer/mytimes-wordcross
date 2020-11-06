import { connect } from "react-redux";
import { fetchUserDaily } from '../../actions/user_daily_actions'
import { updateUserDaily } from "../../util/user_daily_api_util";
import Wordcross from "./wordcross";

const msp = (state, ownProps) => ({
  userId: state.session.id,
  puzzleDate: ownProps.match.params.puzzle_date,
  puzzleType: 'Daily',
  puzzleDataSet: state.entities.userDailys.user_daily,
});

const mdp = dispatch => ({
  fetchPuzzle: (user_id, puzzle_date) => dispatch(fetchUserDaily(user_id, puzzle_date)),
  updatePuzzle: user_daily => dispatch(updateUserDaily(user_daily))
});

const UserDailyContainer = connect(msp, mdp)(Wordcross);

export default UserDailyContainer;