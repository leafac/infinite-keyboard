const { app, globalShortcut, BrowserWindow } = require("electron");

app.dock.hide();

app.on("ready", () => {
  const window = new BrowserWindow({ width: 250, height: 400, frame: false, resizable: false, show: false, webPreferences: { nodeIntegration: true } });
  window.loadFile("index.html");
  globalShortcut.register("Control+Option+Command+Space", () => { window.show(); window.webContents.executeJavaScript(`select.focus();`);
  });
});
