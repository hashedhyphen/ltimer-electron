import * as React    from 'react';
import * as ReactDOM from 'react-dom';
import Config from './config.js';
import Timer  from './timer.js';

/* state */
let state = {  // eslint-disable-line prefer-const
  min: `5`,
  sec: `00`
};

/* timer */
const renderTimer = enabled => {
  const duration = (+state.min * 60) + (+state.sec);

  ReactDOM.render(
    <Timer
      enabled={enabled}
      duration={duration}
    />,
    document.querySelector(`#app`)
  );
};
const startTimer = () => renderTimer(true);
const resetTimer = () => renderTimer(false);

/* config */
const updateState = (type, str) => {
  const num = parseInt(str);
  if (!isNaN(num) && 0 <= num && num < 60) {
    state[type] = str;
  }
};

const renderConfig = () => {
  ReactDOM.render(
    <Config
      min={state.min}
      sec={state.sec}
      handleUpdate={updateState}
    />,
    document.querySelector(`#app`)
  );
};

/* context menu */
const electron = global.require(`electron`)  // avoid browserify
    , remote   = electron.remote
    , Menu     = remote.Menu
    , MenuItem = remote.MenuItem;

const menu = new Menu();
menu.append(new MenuItem({ label: `start`,  click: startTimer   }));
menu.append(new MenuItem({ label: `reset`,  click: resetTimer   }));
menu.append(new MenuItem({ label: `config`, click: renderConfig }));

window.addEventListener(`contextmenu`, ev => {
  ev.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);

/* invoke */
resetTimer();
