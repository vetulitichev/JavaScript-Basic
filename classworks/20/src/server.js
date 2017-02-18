const fs = require('fs'); // fs == File system;
const http = require('http');
let counter = 0;
let server = http
  .createServer((request, response) => {
    console.log(request.url);
    const url = request.url;

    console.log(request.headers.cookie);
    // 0. favicon -> favicon.ico
    // 1. url == '/' ->

    // 2. img

    if (url === '/') {
      // 1. router.html
      fs.readFile('router.html', (err, data) => {
        response.end(data);
      });
    } else if (url === '/280.jpg') {
      // fs.readFile('280.jpg', (err, data) => {
      //   response.end(data);
      // });
      fs.createReadStream('280.jpg').pipe(response);
    } else {
      fs.createReadStream('router.js').pipe(response);
    }
  })
  .listen(3000, 'localhost', () => {
    console.log('server running at localhost:3000');
  });
