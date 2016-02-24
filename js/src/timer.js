import * as React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remains: props.duration
    };
  }

  componentWillMount() {
    if (this.props.enabled) {
      this.intervalID = setInterval(this.updateClock.bind(this), 1000);
    }
  }

  componentWillReceiveProps(nextProps) {
    clearInterval(this.intervalID);
    this.setState({ remains: nextProps.duration });
    if (nextProps.enabled) {
      this.intervalID = setInterval(this.updateClock.bind(this), 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateClock() {
    if (this.state.remains > 0) {
      this.setState({ remains: this.state.remains - 1 });
    } else {
      clearInterval(this.intervalID);
    }
  }

  getRemainedTime() {
    const min = Math.floor(this.state.remains / 60)
        , sec = this.state.remains % 60;
    return (sec >= 10) ? `${min}:${sec}`
                       : `${min}:0${sec}`;
  }

  render() {
    return <span>{this.getRemainedTime()}</span>;
  }
}

Timer.propTypes = {
  enabled:  React.PropTypes.bool,
  duration: React.PropTypes.number
};

Timer.defaultProps = {
  enabled: false,
  duration: 300
};
