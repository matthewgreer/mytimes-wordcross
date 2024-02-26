import { connect } from 'react-redux';
import Body from './body';
import { fetchMicro } from "../../actions/micro_actions";
import { fetchDaily } from "../../actions/daily_actions";
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
  fetchMicro: (weekday) => {
    dispatch(fetchMicro(weekday));
  },
  fetchDaily: (weekday) => {
    dispatch(fetchDaily(weekday));
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
