import { connect } from "react-redux";
import { fetchMicro } from '../../actions/micro_actions'
import { updateMicro } from "../../util/micro_api_util";
import Micro from "./micro";

const msp = (state) => ({
  user_micro: state.entities.micros.user_micro,
});

const mdp = dispatch => ({
  fetchMicro: (user, puzzle_date) => dispatch(fetchMicro(user, puzzle_date)),
  updateMicro: user_micro => dispatch(updateMicro(user_micro))
});

const MicroContainer = connect(msp, mdp)(Micro);

export default MicroContainer;