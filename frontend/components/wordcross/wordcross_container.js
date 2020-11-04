// This container should:
  // subscribe to the entities.
  // map the user_micro or user_daily slice of state to its 
    // child components' props.
  // map fetch actions? to props???

  import { connect } from "react-redux";
  import { fetchUserMicro } from "../../actions/user_micro_actions";
  import { updateUserMicro } from "../../util/user_micro_api_util";
  // import { fetchUserDaily } from "../../actions/user_daily_actions";
  // import { updateUserDaily} from "../../util/user_daily_api_util";
  import Wordcross from './wordcross';

  const msp = (state, ownProps) => ({
    userId: state.session.id,
    puzzleDate: ownProps.match.params.puzzle_date,
    puzzleType: ownProps.match.path.slice(1,6),
    // userMicro: state.entities.userMicros.user_micro,
    // userDaily: state.entities.userDailies.user_daily,
  });

  const mdp = (dispatch) => ({
    fetchUserMicro: (user_id, puzzle_date) =>
      dispatch(fetchUserMicro(user_id, puzzle_date)),
    updateUserMicro: (user_micro) => dispatch(updateUserMicro(user_micro)),
    // fetchUserDaily: (user_id, puzzle_date) =>
    //   dispatch(fetchUserDaily(user_id, puzzle_date)),
    // updateUserDaily: (user_daily) => dispatch(updateUserDaily(user_daily)),
  });

  const WordcrossContainer = connect(msp, mdp)(Wordcross);

  export default WordcrossContainer;