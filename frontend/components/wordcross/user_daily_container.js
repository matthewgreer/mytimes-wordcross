import { connect } from "react-redux";
import {
  fetchUserDaily,
  updateUserDaily,
} from "../../actions/user_daily_actions";
import Wordcross from "./wordcross";

const msp = (state, ownProps) => ({
  userId: state.session.id,
  wordcrossDate: ownProps.match.params.wordcross_date,
  wordcrossType: 'Daily',
  wordcrossDataSet: state.entities.userDailys.user_daily,
});

const mdp = dispatch => ({
  fetchWordcross: (user_id, wordcross_date) => dispatch(fetchUserDaily(user_id, wordcross_date)),
  updateWordcross: user_daily => dispatch(updateUserDaily(user_daily))
});

const UserDailyContainer = connect(msp, mdp)(Wordcross);

export default UserDailyContainer;