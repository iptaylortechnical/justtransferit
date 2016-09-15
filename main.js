const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({width:450, height:330, backgroundColor: '#111111'});
    win.loadURL(`file://${__dirname}/index.html`);
    win.setMenu(null);

}

hello = () => {
    console.log('hasdf');
}

app.on('ready', createWindow);