import { connect } from 'react-redux';
import Banner from './banner';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
  bannerType: "form"
});

const FormBannerContainer = connect(msp, null)(Banner);

export default FormBannerContainer;