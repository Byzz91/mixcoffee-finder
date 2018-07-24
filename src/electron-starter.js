const url = require('url');
const path = require('path');
const { app, BrowserWindow } = require('electron');

let mainWindow;

/**
 * createWindow
 * 
 * @returns void
 */
function createWindow() {
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes : true
  });

  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800
  });

  mainWindow.loadURL(startUrl);
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});