const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow // Global reference of the window object, if you don't, the window will be closed automatically when the JavaScript object is garbage collected.

function createWindow () {

  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: width / 4,
    height: height, 
    x: 0,
    y: 0});

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', function () {
    mainWindow = null
  });
};

// Called when Electron has finished initialization
app.on('ready', createWindow);

// For OSX to quit all if windows are closed but not CMD + Q'ed
app.on('window-all-closed', function () {
  app.quit();
});

// For OSX recreate window all windows closed
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});