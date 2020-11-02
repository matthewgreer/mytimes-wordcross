import { connect } from 'react-redux';
import Modal from './modal';

const msp = (state, ownProps) => ({});

const mdp = (dispatch) => ({});

const ModalContainer = connect(msp, mdp)(Modal);

export default ModalContainer;