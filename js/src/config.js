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
  }

  handleSecChange(ev) {
    const secStr = ev.target.value.substr(0, 2);
    this.setState({ sec: secStr });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.onConfigSubmit({
      min: this.state.min,
      sec: this.state.sec
    });
  }

  render() {
    return (
      <form
        className="config"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <input
          className="min"
          value={this.state.min}
          onChange={this.handleMinChange.bind(this)}
        />
        <span>:</span>
        <input
          className="sec"
          value={this.state.sec}
          onChange={this.handleSecChange.bind(this)}
        />
        <input
          className="dummy"
          type="submit"
        />
      </form>
    );
  }
}

Config.propTypes = {
  min: React.PropTypes.string.isRequired,
  sec: React.PropTypes.string.isRequired,
  onConfigSubmit: React.PropTypes.func.isRequired
};
