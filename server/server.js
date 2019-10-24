const net = require('net');
const fs = require('fs');

const server = net.createServer();
 
server.listen(3300, () => {
  console.log('Server listening on port 3300!');
});

server.on('connection', (client) => {
  console.log('New client connected!');
  //client.write('Hello there!');
  client.setEncoding('utf8'); // interpret data as text
  client.on('data', (data) => {
    const desiredFile = data;
    console.log('Client is requesting: ', desiredFile)
    fs.readFile(desiredFile, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('File has been read.');
      //console.log('file: ', data);
      client.write(data);
      console.log('File has been sent.');
      process.exit();
    });
    
  });
});

