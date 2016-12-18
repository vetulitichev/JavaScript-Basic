'use strict';
let fs = require('fs');
const port = process.env.PORT || 3000;
const server = require('http').createServer((req, res) => {
  fs.readFile('index.html', {}, (err, file) => {
    res.end(file);
  });
  res.status = 404;
});
const io = require('socket.io')(server);
io.on('connection', function(client) {
  
  console.log('a user connected');
  
  client.on('event', function(data) {});
  client.on('disconnect', function() {});
});

//server.on((req, res) => {
//  res.body = 'hi'
//});
console.log('updated');
server.listen(port);