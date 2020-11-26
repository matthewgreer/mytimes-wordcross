import { connect } from 'react-redux';
import Body from './body';
import { fetchMicroAuthor } from "../../actions/micro_actions";
// import { fetchDailyAuthor } from "../../actions/daily_actions";
import { fetchUserMicro } from "../../actions/user_micro_actions";
// import { fetchUserDaily } from "../../actions/user_daily_actions";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
  microAuthor: state.entities.micros.author,
  microDataSet: state.entities.userMicros.user_micro,
  // dailyAuthor: state.entities.dailies.author
  // dailyDataSet: state.entities.userDailys.user_daily,
});

const mdp = (dispatch) => ({
  fetchMicroAuthor: (wordcross_date) => {
    dispatch(fetchMicroAuthor(wordcross_date));
  },
  fetchUserMicro: (user_id, wordcross_date) => {
    dispatch(fetchUserMicro(user_id, wordcross_date));
  },
  // fetchDailyAuthor: (wordcross_date) => {
  // dispatch(fetchDailyAuthor(wordcross_date));
  // },
  // fetchUserDaily: (user_id, wordcross_date) => {
  //   dispatch(fetchUserDaily(user_id, wordcross_date));
  // }
});

const BodyContainer = connect(msp, mdp)(Body);

export default BodyContainer;