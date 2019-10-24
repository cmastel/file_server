const net = require('net');
const fs = require('fs');

const fileName = './index2.html';

const conn = net.createConnection({ 
  host: 'localhost', 
  port: 3300
});

conn.setEncoding('utf8'); // interpret data as text

conn.on('connect', () => {
  console.log('Requesting file from server.');
  conn.write(fileName);
});

conn.on('data', (data) => {
  console.log('Received file from server.');
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved.');
  })
});

