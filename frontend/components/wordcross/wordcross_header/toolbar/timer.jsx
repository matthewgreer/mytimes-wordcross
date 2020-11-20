import React from "react";

// these functions and state will probably need to be elevated to 

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elapsedSeconds: 0,
      elapsedMinutes: 0,
      elapsedHours: 0
    };
    
    this.isTimerRunning = false

    this.handlePause = this.handlePause.bind(this);
    this.countUp = this.countUp.bind(this);
    this.stopCounting = this.stopCounting.bind(this);
    this.incrementSeconds = this.incrementSeconds.bind(this);
    this.incrementMinutes = this.incrementMinutes.bind(this);
    this.incrementHours = this.incrementHours.bind(this);
  };

  componentDidMount() {
      return setInterval(this.countUp, 1000);
  };

  // this should be called when hideModal is called

  handlePause(e) {
    return this.isTimerRunning ? 
    this.isTimerRunning = false : 
    this.isTimerRunning = true;
  };

  countUp() {
    if (this.isTimerRunning) {
      this.incrementSeconds();
      if (this.state.elapsedSeconds > 59) {
        this.setState({ elapsedSeconds: 0 });
        this.incrementMinutes();
        if (this.state.elapsedMinutes > 59) {
          this.setState({ elapsedMinutes: 0 });
          this.incrementHours();
        }
      }
    }
  };

  incrementSeconds() {
    return this.setState(({ elapsedSeconds }) => ({
      elapsedSeconds: elapsedSeconds + 1 
    }));
  };

  incrementMinutes() {
    return this.setState(({ elapsedMinutes }) => ({
      elapsedMinutes: elapsedMinutes + 1 
    }));
  };

  incrementHours() {
    return this.setState(({ elapsedHours }) => ({
      elapsedHours: elapsedHours + 1 
    }));
  };

  stopCounting() {
    return this.isTimerRunning = false;
  }

  componentWillUnmount() {
    return clearInterval(this.countUp, 1000);
  };

  render() {
    return (
      <div>
        <span>
          {this.state.elapsedHours > 0 &&
          <span>{this.state.elapsedHours}:</span>}
          <span>{this.state.elapsedMinutes}:</span>
          {this.state.elapsedSeconds < 10 &&
          <span>0</span>}
          <span>{this.state.elapsedSeconds}</span>
        </span>
        {/* remove button, start timer with hideModal, pause icon/button should
        appear to right of timer when started */}
        <button onClick={this.handlePause}>||</button>
      </div>
    );
  };
};

export default Timer;