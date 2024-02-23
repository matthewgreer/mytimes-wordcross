import { connect } from 'react-redux';
import Stats from './stats';
import { fetchStats } from "../../actions/stats_actions";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
  stats: state.entities.stats,
});

const mdp = (dispatch) => ({
  fetchStats: (user_id) => {
    dispatch(fetchStats(user_id));
  },
});

const StatsContainer = connect(msp, mdp)(Stats);

export default StatsContainer;
