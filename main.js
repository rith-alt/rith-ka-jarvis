import { app, BrowserWindow } from 'electron';
import { spawn } from 'node:child_process';

let vite;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: { devTools: true },
  });
  win.loadURL('http://localhost:5173');
  win.on('closed', () => {
    if (vite) vite.kill();
  });
}

app.whenReady().then(() => {
  vite = spawn('node', ['node_modules/vite/bin/vite.js'], { stdio: 'inherit' });
  setTimeout(createWindow, 2500);
});
