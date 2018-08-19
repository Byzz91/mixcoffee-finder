const url = require('url');
const path = require('path');
const { app, BrowserWindow, ipcRenderer, ipcMain } = require('electron');

let mainWindow;

/**
 * createWindow
 * 
 * @returns void
 */
function createWindow() {
  console.log('process.env.ELECTRON_START_URL', process.env.ELECTRON_START_URL);
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes : true
  });

  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    frame: false,
    titleBarStyle: 'hidden'
  });

  mainWindow.loadURL(startUrl);
  mainWindow.webContents.openDevTools();
  mainWindow.setHasShadow(true);
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


ipcMain.on('invoke-action', (event, senderType) => {
  // event.sender.send('invoke-action', senderType);  

  if (typeof senderType === 'object' && 'type' in senderType) {
    switch (senderType.type) {
      case 'windowController':
        if (! senderType.params instanceof Array) {
          senderType.params = [senderType.params];
        }

        senderType.params = senderType.params.join('');

        switch (senderType.params) {
          case 'minimize':
            mainWindow.minimize();
            break;
          case 'close':
            mainWindow.close();
            break;
          case 'maximize':
          default:
            mainWindow.maximize();
        }
      break;
    }
  }
});