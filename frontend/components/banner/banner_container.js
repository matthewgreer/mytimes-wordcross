import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Banner from './banner';

const msp = (state) => ({
  currentUser: state.entities.user[state.session.id],
  bannerType: "main"
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
});

const BannerContainer = connect(msp, mdp)(Banner);

export default BannerContainer;
