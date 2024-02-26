import { connect } from 'react-redux';
import UserStats from './user_stats';
import { fetchUserStat } from '../../actions/user_stat_actions'

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
  userStats: state.entities.userStats,
});

const mdp = (dispatch) => ({
  fetchUserStat: (userId) => {
    dispatch(fetchUserStat(userId));
  },
});

const UserStatsContainer = connect(msp, mdp)(UserStats);

export default UserStatsContainer;
