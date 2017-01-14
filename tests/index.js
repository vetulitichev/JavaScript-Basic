const server = require('http')
    .createServer((req, res) => {
      //console.log('------------', req);
      //fs.readFile('index.html', {}, (err, file) => {
      //  res.end(file + '+1'.toString('binary'));
      //});'
      console.log('www');
      req.body = 'www';
      //res.end = 'hello world';
      //res.status = 200;
    }).listen(3000);