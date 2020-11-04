import { connect } from 'react-redux';
import Body from './body';
import { fetchMicroAuthor } from "../../actions/micro_actions";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
  microAuthor: state.entities.micros.author
});

const mdp = (dispatch) => ({
  fetchMicroAuthor: (puzzle_date) =>
    dispatch(fetchMicroAuthor(puzzle_date))
});

const BodyContainer = connect(msp, mdp)(Body);

export default BodyContainer;