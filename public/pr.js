const usb = require('usb');

const cmds = [
  'SIZE 48 mm,25 mm',
  'CLS',
  'TEXT 10,10,"4",0,1,1,"HackerNoon"',
  'BARCODE 10,60,"128",90,1,0,2,2,"altospos.com"',
  'PRINT 1',
  'END',
];

// you can get all available devices with usb.getDeviceList()
let device = usb.findByIds(/*vid*/5732, /*pid*/2155);
device.open();
device.interfaces[0].claim();
const outEndpoint = device.interfaces[0].endpoints.find(e => e.direction === 'out');
outEndpoint.transferType = 2;
outEndpoint.transfer(Buffer.from(cmds.join('\r\n')), (err) => {
  device.close();
})