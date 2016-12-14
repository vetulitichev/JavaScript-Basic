'use strict';
let a = 2;
foo();

function foo() {
  a = 3;
  
  console.log(a);
  
  let a;
}

console.log(a);