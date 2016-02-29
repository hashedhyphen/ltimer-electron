import * as React from 'react';

// 'global' avoids browserify...
const remote = global.require(`electron`).remote
    , Menu   = remote.Menu;

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remains: props.duration
    };
  }

  setMenuOf(active) {
    /* eslint-disable indent */
    const menu = (active)
      ? Menu.buildFromTemplate([
          { label: `reset`, click: this.props.onResetSelect }
        ])
      : Menu.buildFromTemplate([
          { label: `start`,  click: this.props.onStartSelect  },
          { label: `config`, click: this.props.onConfigSelect }
        ]);
    /* eslint-enable indent */

    Menu.setApplicationMenu(menu);

    this.handleContextMenu = ev => {
      ev.preventDefault();
      menu.popup(remote.getCurrentWindow());
    };

    window.addEventListener(
      `contextmenu`, this.handleContextMenu, false
    );
  }

  toggleMenu() {
    window.removeEventListener(
      `contextmenu`, this.handleContextMenu, false
    );
    this.setMenuOf(!this.props.active);
  }

  componentWillMount() {
    this.setMenuOf(this.props.active);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.toggleMenu();
      this.intervalID = setInterval(this.updateClock.bind(this), 1000);
    } else {
      clearInterval(this.intervalID);
      this.toggleMenu();
      this.setState({ remains: nextProps.duration });
    }
  }

  componentWillUnmount() {
    window.removeEventListener(
      `contextmenu`, this.handleContextMenu, false
    );
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
    return sec >= 10 ? `${min}:${sec}` : `${min}:0${sec}`;
  }

  render() {
    return <span>{this.getRemainedTime()}</span>;
  }
}

Timer.propTypes = {
  active:   React.PropTypes.bool.isRequired,
  duration: React.PropTypes.number.isRequired,
  onStartSelect:  React.PropTypes.func.isRequired,
  onResetSelect:  React.PropTypes.func.isRequired,
  onConfigSelect: React.PropTypes.func.isRequired
};
