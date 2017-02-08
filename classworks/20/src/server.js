const fs = require('fs'); // fs == File system;
const http = require('http');
let counter = 0;
let server = http
  .createServer((request, response) => {
    console.log(request.url);
    const url = request.url;
    let data;
    if (url === '/') {
      data = 'router';
    }
    if (url === '/') {
      fs.readFile(`${data}.html`, (err, data) => {
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
