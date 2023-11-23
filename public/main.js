const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path');

const escpos = require('escpos');
escpos.USB = require('escpos-usb');
 
// const usbDevice = new escpos.USB(0x01, 0xff)

const handleFileOpen = async (props) =>  {
  const device = new escpos.USB(8137, 8214);
 console.log("oooooooooooooooooooooooooooo", escpos.USB.findPrinter());

///////////////////////////////
const options = { encoding: "GB18030" /* default */ }
// encoding is optional

const printer = new escpos.Printer(device, options);

const tux = path.join(__dirname, 'Aum.png');
// escpos.Image.load(tux, function(image){

//   device.open(function(){
// console.log("oooooooooooooooooooooooooooooooooooooooooooooo");
//     printer.align('ct')
//            .image(image, 's8')
//            .then(() => { 
//               printer.cut().close(); 
//            });

//     // OR non-async .raster(image, "mode") : printer.text("text").raster(image).cut().close();

//   });

// });

// device.open(function(error){
//   printer
//   .font('a')
//   .align('ct')
//   .style('bu')
//   .size(1, 1)
//   .text('The quick brown fox jumps over the lazy dog')
//   .text('敏捷的棕色狐狸跳过懒狗')
//   .barcode('1234567', 'EAN8')
//   .table(["One", "Two", "Three"])
//   .tableCustom(
//     [
//       { text:"Left", align:"LEFT", width:0.33, style: 'B' },
//       { text:"Center", align:"CENTER", width:0.33},
//       { text:"Right", align:"RIGHT", width:0.33 }
//     ],
//     { encoding: 'cp857', size: [1, 1] } // Optional
//   )
//   .qrimage('https://github.com/song940/node-escpos', function(err){
//     this.cut();
//     this.close();
//   });
// });


//////////////////////////////////////////////////////

return "Maa Shakti";
}

function createWindow () {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: true,
      // nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })

  mainWindow.loadURL('http://localhost:3000/')
}  


// ipcMain.handle('dialog:openFile', handleFileOpen)


app.whenReady().then(() => {
  ipcMain.handle('dialog:openFile', handleFileOpen)
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})