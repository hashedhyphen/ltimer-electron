const electron = require(`electron`);

const app = electron.app;
let mainWindow = null;

app.on(`window-all-closed`, () => {
  if (process.platform !== `darwin`) { app.quit(); }
});

app.on(`ready`, () => {
  const BrowserWindow = electron.BrowserWindow
      , display = electron.screen.getPrimaryDisplay();

  mainWindow = new BrowserWindow({
    width: 150,
    height: 70,
    x: display.size.width - 150,
    y: display.size.height - 70,
    resizable: false,
    alwaysOnTop: true,
    frame: false,
    transparent: true
  });

  mainWindow.loadURL(`file://${__dirname}/../../index.html`);

  mainWindow.on(`closed`, () => mainWindow = null);
});
