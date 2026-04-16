const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // We will add specific API bridges here as we need them in future phases
  version: '0.1.0',
});
