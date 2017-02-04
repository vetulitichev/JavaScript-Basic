const fs = require('fs');

require('http').createServer((req, res) => {

  fs.readFile('router.html', (err, data) => {
    res.status = 200;
    res.end(data);
  });

  if (req.url === "/router.js") {
    res.writeHeader(200, { "Content-Type": "text/javascript" });
    fs.createReadStream("./router.js").pipe(res);
  }

}).listen(3000, 'localhost', () => { console.log('server running at localhost:3000') });