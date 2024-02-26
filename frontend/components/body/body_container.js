import { connect } from 'react-redux';
import Body from './body';
import { fetchMicroAuthor } from "../../actions/micro_actions";
import { fetchDailyAuthor } from "../../actions/daily_actions";
import { fetchUserMicro } from "../../actions/user_micro_actions";
import { fetchUserDaily } from "../../actions/user_daily_actions";
import { fetchUserStat } from '../../actions/user_stat_actions';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
  micro: state.entities.micros,
  daily: state.entities.dailies,
  userMicro: state.entities.userMicros,
  userDaily: state.entities.userDailies,
  userStat: state.entities.userStats
});

const mdp = (dispatch) => ({
  fetchMicroAuthor: (wordcross_date) => {
    dispatch(fetchMicroAuthor(wordcross_date));
  },
  fetchDailyAuthor: (wordcross_date) => {
    dispatch(fetchDailyAuthor(wordcross_date));
  },
  fetchUserMicro: (userId, wordcrossDate) => {
    dispatch(fetchUserMicro(userId, wordcrossDate));
  },
  fetchUserDaily: (userId, wordcrossDate) => {
    dispatch(fetchUserDaily(userId, wordcrossDate));
  },
  fetchUserStat: (userId) => {
    dispatch(fetchUserStat(userId));
  }
});

const BodyContainer = connect(msp, mdp)(Body);

export default BodyContainer;