'use strict';
function sumOld(number) {
  if ( number == 1 ) {
    return number
  }
  return number + sum(number - 1);
}

function sum(number) {
  console.log(number);
  return number > 1 ? number + sum(number - 1) : number;
}

console.log(sum(10));
//sum(10);
// 10
// 9
// 8
// 7
// 6
// 5

