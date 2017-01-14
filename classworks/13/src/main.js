//setTimeout(function() {
//  console.log('first')
//}, 5);
//setTimeout(function() {
//  console.log('www')
//}, 0);
//console.log('next');
//
//let numberOne = null;
//let add = (a, b) => {
//  console.log(a + b);
//  return a + b;
//};
//
//setTimeout(function() {
//  numberOne = 100;
//  this.x = 100;
//}, 1000);
//
//let errors = [];
//try {
//
//} catch (e) {
//  errors.push(e);
//  console.log('You have an error');
//} finally {
//  console.log(errors)
//}
//let xxx = (val => {console.log(val)})(val);

//var myArray = [1, 2, 3];
//
//
//var arr = [];
//for (let i = 0; i < 10; i++) {
//  (function() {
//    arr[i] = function() {
//      console.log(i)
//    }
//  })()
//}
//
//arr[5]()
//arr[4]()
//fn(1)(2) //3

//var
function Browser(url) {
  let counter = 0;
  this.url = url
  this.add = function() {
    console.log(++counter);
  }
}

Browser.prototype.getUrl = function() {
  console.log(this.url);
}

function Server(database, middlewares) {
  this.database = database;
  this.middlewares = middlewares;
}
//Server.prototype = new Browser('wwww');
Server.prototype.listen = function(port, host, callback) {
  this.host = host;
  this.port = port;
  callback(host, port);
};


class Server extends Browser {
  constructor(database, middlewares) {
    super();
    this.database = database;
    this.middlewares = middlewares;
  }
  
  listen(port, host, callback) {
    //this.url = this.url || host;
    this.host = host;
    this.port = port;
    callback(host, port);
  }
}

var myServer = new Server('mySQL', [() => {}]);
myServer.listen(3000, 'localhost', console.log);


//
//
//
//
//function Browser(url, name) {
//  this.url = url;
//  this.name = name;
//}



