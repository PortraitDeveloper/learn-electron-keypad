const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("electron", {
  alert: (message) => ipcRenderer.send("alert", message),
});


