const { app, Menu, Tray } = require('electron');

const path = require('path');
const favicon = path.resolve(__dirname, 'favicon.ico');
const favicon_full = path.resolve(__dirname, 'favicon_full.ico');

let tray = null
app.on('ready', () => {
  tray = new Tray(favicon);
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item2', type: 'radio', click:  () => {tray.setImage(favicon_full);} },
    { label: 'Item3', type: 'radio', checked: true, click:  () => {tray.setImage(favicon);}  }
  ])
  tray.setToolTip('Это мое приложение.')
  tray.setContextMenu(contextMenu);
  
});
