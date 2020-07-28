import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
});

const GreetingContainer = connect(msp, mdp)(Greeting);

export default GreetingContainer;