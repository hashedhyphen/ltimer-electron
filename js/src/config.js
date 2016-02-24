import * as React from 'react';

export default class Config extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: props.min,
      sec: props.sec
    };
  }

  handleMinChange(ev) {
    const minStr = ev.target.value.substr(0, 2);
    this.setState({ min: minStr });
    this.props.handleUpdate(`min`, minStr);
  }

  handleSecChange(ev) {
    const secStr = ev.target.value.substr(0, 2);
    this.setState({ sec: secStr });
    this.props.handleUpdate(`sec`, secStr);
  }

  render() {
    return (
      <form className="config">
        <input
          value={this.state.min}
          onChange={this.handleMinChange.bind(this)}
        />
        <span>:</span>
        <input
          value={this.state.sec}
          onChange={this.handleSecChange.bind(this)}
        />
      </form>
    );
  }
}

Config.propTypes = {
  min: React.PropTypes.string.isRequired,
  sec: React.PropTypes.string.isRequired,
  handleUpdate: React.PropTypes.func.isRequired
};
