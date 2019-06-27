const { app, globalShortcut, BrowserWindow } = require("electron");

app.dock.hide();

app.on("ready", () => {
  const window = new BrowserWindow({
    width: 250,
    height: 400,
    frame: false,
    resizable: false,
    show: false,
    webPreferences: { nodeIntegration: true }
  });
  window.setVisibleOnAllWorkspaces(true);
  window.loadFile("index.html");
  globalShortcut.register("Control+Option+Command+Space", () => {
    if (window.isVisible()) {
      window.webContents.executeJavaScript(`select.blur();`);
    }
    else {
      window.webContents.executeJavaScript(`select.focus();`);
      window.show();
    }
  });
});
