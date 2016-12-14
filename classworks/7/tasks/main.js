'use strict';

var a = 2;
foo();

function foo() {
  a = 3;

  console.log(a);

  var a;
}

console.log(a);





//function foo() {
//  var a = 1;
//  function bar() {
//    var b = 2;
//    function baz() {
//      var c = 3;
//      console.log(a, b, c);
//    }
//    baz();
//    console.log(a, b);
//  }
//  bar();
//  console.log(a);
//}
//foo();


//function foo() {
//  a = 1;
//}
//
//foo();
//console.log(a);


// Для примитивных типов
//switch (a) {
//  case 2:
//    // do something
//    break;
//  case 10:
//    // do another thing
//    break;
//  case 42:
//    // do yet another thing
//    break;
//  default:
//    // fallback to here
//}


//var x = (function IIFE(){
//  return 42;
//})();
//
//x;  // 42





