import { connect } from "react-redux";
import Micro from "./micro";

const msp = (state) => ({
  user_micro: state.entities.micros.user_micro,
});

const MicroContainer = connect(msp, null)(Micro);

export default MicroContainer;