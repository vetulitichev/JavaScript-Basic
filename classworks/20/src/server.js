const fs = require('fs'); // fs == File system;
const http = require('http');
let counter = 0;
let server = http
  .createServer((request, response) => {
    console.log(request.url);
    const url = request.url;
    let data;
    // 0. favicon -> favicon.ico
    // 1. url == '/' ->

    // 2. img
    if (url === '/') {
      data = 'router';
    }
    if (url === '/') {
      // 1. router.html
      fs.readFile(`router.html`, (err, data) => {
        response.end(data);
      });
    } else if (url === '/280.jpg') {
      fs.readFile(url.slice(1), (err, data) => {
        response.end(data);
      });
    } else {
      fs.readFile('router.js', (err, data) => {
        response.end(data);
      });
    }
  })
  .listen(3000, 'localhost', () => {
    console.log('server running at localhost:3000');
  });
