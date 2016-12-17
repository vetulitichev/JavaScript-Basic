'use strict';
 //Простое замыкание
//let outerValue = 'ninja';
//
//function outerFunction() {
//  console.log(outerValue)
//}
//
//outerFunction();













// Замыкание

function closure() {
  let outerValue = 'easyCode';
  function innerFunction() {
    console.log(outerValue);
  }
  return innerFunction;
}

let HighOrderFunction = closure();

// Написать функцию высшего порядка которая прибавляет
// к переданному параметру добавляет 10

//function addTEN(randomNumber) {
//  let innerNumber = 10;
//
//  var innerFunction = function(number) {
//    console.log(number + randomNumber);
//    return number + randomNumber;
//  };
//
//  return innerFunction
//}
//
//let plusTen = addTEN(1000000);
//
//let x = plusTen(25); // 35
let y = plusTen(100); // 110





// Непростое замыкание

//let outerValue = 'ninja';
//
//let later;
//
//function outerValue() {
//  let innerValue = 'samurai';
//
//  function innerFunction() {
//    console.log(outerValue);
//    console.log(innerValue);
//  }
//
//  later = innerFunction;
//
//}
//outerValue();
//
//later();



