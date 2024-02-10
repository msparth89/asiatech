const { app, BrowserWindow, ipcMain } = require('electron');
const { log } = require('node:console');
const path = require('node:path');
const usb = require('usb');



// (async function() {
//   await print([
//     '<ESC>!R',
//     'SIZE 80 mm,11 mm',
//     'CLS',
//     'TEXT 10,10,"4",0,1,1,"HackerNoon"',
//     'TEXT 10,47,"1",0,1,1,"Top Stories"',
//     'TEXT 10,64,"1",0,1,1,"Programming"',
//     'PRINT 1',
//     'END',
//   ]);

//   await print([
//     '<ESC>!R',
//     'SIZE 80 mm,21 mm',
//     'CLS',
//     `TEXT 10,10,"4",0,1,1,"Alto's POS & Inventory"`,
//     'TEXT 10,50,"2",0,1,1,"Restaurants & Cafes"',
//     'TEXT 10,75,"2",0,1,1,"Retail Stores"',
//     'TEXT 10,100,"2",0,1,1,"Services"',
//     'TEXT 10,125,"1",0,1,1,"https://altospos.com"',
//     'PRINT 1',
//     'END',
//   ]);
// })();



function print(cmds) {
  return new Promise((resolve,reject) => {
    console.log(cmds);
    // you can get all available devices with usb.getDeviceList()
    console.log("yyyyyyyyyy y        ",usb.getDeviceList());
    let device = usb.findByIds(/*vid*/5732, /*pid*/2155);
    // const device = new escpos.USB(5732, 2155);    // try{
    device.open();
    const interface = device.interfaces[0];
    interface.claim();
    const outEndpoint = interface.endpoints.find(e => e.direction === 'out');
    outEndpoint.transferType = 2;
    outEndpoint.transfer(Buffer.from(cmds.join('\n')), (err) => {
      if(err){
        console.log(err);
      }
      device.close();
      // console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy ", usb.getDeviceList());

      resolve();
    }
  // }
    
    
    );
  }
  
  



  
  );
}

async function maashakti(){
  await print(
    // '<ESC>!R',
    // 'SIZE 80 mm,11 mm',
    // 'CLS',
    // 'TEXT 10,10,"4",0,1,1,"HackerNoon"',
    // 'TEXT 10,47,"1",0,1,1,"Top Stories"',
    // 'TEXT 10,64,"1",0,1,1,"Programming"',
    // 'PRINT 1',
    // 'END',

   [
    
    // 'N',
    // 'I7,5,001',
    // 'A50,30,0,3,1,1,N,"£100"',
    // 'P1'


//   "<xpml><page quantity='0' pitch='50.8 mm'></xpml>I8,A",
// 'ZN',
// 'q812',
// 'S3',
// 'O',
// 'JF',
// 'KIZZQ0',
// 'KI9+0.0',
// 'D8',
// 'ZT',
// 'Q406,25',
// 'Arglabel 508 31',
// 'exit',
//"<xpml></page></xpml><xpml><page quantity='1' pitch='50.8 mm'></xpml>N",
//'A537,341,2,2,2,2,N,"Sample Text"',
//'B531,227,2,1,3,6,102,N,"12345678"',
//'A461,115,2,2,1,1,N,"12345678"',
//'P1',
//'<xpml></page></xpml><xpml><end/></xpml>'


// YOUR COMMANDS WORKING

// 'I8,1,001',
// 'ZN',
// 'q886',
// 'O',
// 'JF',
// 'KIZZQ0',
// 'KI9+0.0',
// 'ZT',
// 'Q886,B37',
// 'Arglabel 750 31',
// 'exit',
// 'KI80',
// 'N',
// 'b401,528,Q,m2,s9,eL,iA,"12345678"',
// 'A559,501,2,2,1,1,N,"12345678"',
// 'P1',
  ]
    // "<STX>L<CR>121100001000050THIS LABEL IS MADE BY JIMMY<CR>E<CR>"

  );

// console.log("tttttttttttttttttttttttttttttttttttttttttttttttttttttttttt");
}

// const escpos = require('escpos');
// escpos.USB = require('escpos-usb');
 
// const usbDevice = new escpos.USB(0x01, 0xff)

// const handleFileOpen = async (props) =>  {
//   const device = new escpos.USB(5732, 2155);
//   console.log("oooooooooooooooooooooooooooo", escpos.USB.findPrinter());

// ///////////////////////////////
// const options = { encoding: "GB18030" /* default */ }
// // encoding is optional

// const printer = new escpos.Printer(device, options);

// // const tux = path.join(__dirname, 'Aum.png');
// // escpos.Image.load(tux, function(image){

// //   device.open(function(){
// // console.log("oooooooooooooooooooooooooooooooooooooooooooooo");
// //     printer.align('ct')
// //            .image(image, 's8')
// //            .then(() => { 
// //               printer.cut().close(); 
// //            });

// //     // OR non-async .raster(image, "mode") : printer.text("text").raster(image).cut().close();

// //   });

// // });

// device.open(function(error){
//   console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", error);
//   printer
//   .font('a')
//   .align('ct')
//   .style('bu')
//   // .size(1, 1)
//   .text('The quick brown fox jumps over the lazy dog')
//   .text('敏捷的棕色狐狸跳过懒狗')
//   // .barcode('1234567', 'EAN8')
//   // .table(["One", "Two", "Three"])
//   // .tableCustom(
//   //   [
//   //     { text:"Left", align:"LEFT", width:0.33, style: 'B' },
//   //     { text:"Center", align:"CENTER", width:0.33},
//   //     { text:"Right", align:"RIGHT", width:0.33 }
//   //   ],
//   //   { encoding: 'cp857', size: [1, 1] } // Optional
//   // )
//   // .qrimage('https://github.com/song940/node-escpos', function(err){
//   //   this.cut();
//   //   this.close();
//   // });
//   console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", error);

// });


// //////////////////////////////////////////////////////

// return "Maa Shakti";
// }

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
    win.settitle(title)
  })

  mainWindow.loadURL('http://localhost:3000/')
}  


// ipcMain.handle('dialog:openFile', handleFileOpen)


app.whenReady().then(() => {
  // ipcMain.handle('dialog:openFile', handleFileOpen)
  // ipcMain.handle('dialog:openFile', maashakti());
  ipcMain.handle('dialog:openFile', maashakti);


  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})