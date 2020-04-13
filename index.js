const { app, Menu, Tray } = require('electron');

let tray = null
app.on('ready', () => {
  tray = new Tray('favicon.ico');
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item2', type: 'radio', click:  () => {tray.setImage('favicon_full.ico');} },
    { label: 'Item3', type: 'radio', checked: true, click:  () => {tray.setImage('favicon.ico');}  }
  ])
  tray.setToolTip('Это мое приложение.')
  tray.setContextMenu(contextMenu);
  
});
