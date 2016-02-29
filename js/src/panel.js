import * as React    from 'react';
import * as ReactDOM from 'react-dom';

import Timer  from './timer.js';
import Config from './config.js';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowType: `timer`,
      timerActive: false,
      min: `5`,
      sec: `00`
    };
  }

  startTimer() {
    this.setState({
      windowType: `timer`,
      timerActive: true
    });
  }

  resetTimer() {
    this.setState({
      windowType: `timer`,
      timerActive: false
    });
  }

  changeTimerToConfig() {
    this.setState({
      windowType: `config`,
      timerActive: false
    });
  }

  changeConfigToTimer({ min, sec }) {
    const isValid = str => {
      const num = parseInt(str);
      return !isNaN(num) && 0 <= num && num < 60;
    };

    if (isValid(min) && isValid(sec)) {
      this.setState({
        windowType: `timer`,
        timerActive: false,
        min,
        sec
      });
    } else {
      this.setState({
        windowType: `timer`,
        timerActive: false
      });
    }
  }

  getDuration() {
    return (+this.state.min * 60) + (+this.state.sec);
  }

  render() {  // eslint-disable-line consistent-return
    switch (this.state.windowType) {
      case `timer`:
        return (
          <Timer
            active={this.state.timerActive}
            duration={this.getDuration()}
            onStartSelect={this.startTimer.bind(this)}
            onResetSelect={this.resetTimer.bind(this)}
            onConfigSelect={this.changeTimerToConfig.bind(this)}
          />
        );
      case `config`:
        return (
          <Config
            min={this.state.min}
            sec={this.state.sec}
            onConfigSubmit={this.changeConfigToTimer.bind(this)}
          />
        );
      // no default
    }
  }
}

ReactDOM.render(<Panel />, document.querySelector(`#app`));
