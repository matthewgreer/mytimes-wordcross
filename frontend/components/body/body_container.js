import { connect } from 'react-redux';
import Body from './body';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const BodyContainer = connect(msp, null)(Body);

export default BodyContainer;