import {app, Menu, Tray} from 'electron';

import path from 'path';

const favicon = path.resolve(import.meta.dirname, 'favicon.ico');
const favicon_full = path.resolve(import.meta.dirname, 'favicon_full.ico');

let tray = null;
app.on('ready', () => {
    tray = new Tray(favicon);
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Item2', type: 'radio', click: () => {
                console.log(favicon_full)
                tray.setImage(favicon_full);
            }
        },
        {
            label: 'Item3', type: 'radio', checked: true, click: () => {
                tray.setImage(favicon);
            }
        },
        {type: 'separator'},
        {
            label: 'Quit', click() {
                app.quit();
            }
        }
    ]);
    tray.setToolTip('Это мое приложение.');
    tray.setContextMenu(contextMenu);
});
