import { connect } from 'react-redux';
import Body from './body';
import { fetchMicroAuthor } from "../../actions/micro_actions";
// import { fetchDailyAuthor } from "../../actions/daily_actions";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
  microAuthor: state.entities.micros.author,
  // dailyAuthor: state.entities.dailies.author
});

const mdp = (dispatch) => ({
  fetchMicroAuthor: (wordcross_date) =>
    dispatch(fetchMicroAuthor(wordcross_date)),
  // fetchDailyAuthor: (wordcross_date) =>
    // dispatch(fetchDailyAuthor(wordcross_date))
});

const BodyContainer = connect(msp, mdp)(Body);

export default BodyContainer;