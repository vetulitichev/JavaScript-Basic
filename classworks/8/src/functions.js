'use strict';


let helloHuman = function(human) {
  
};

let helloHuman2 = function add(number) {
  return number == 1 ? number : number + add(number - 1);
};


function add(a, b) {
  return a + b
}


// Немедленно вызываемая функция
// Функция которая вызывается сразу же после объявления

function checkParam() {
  let z = '';
  switch (dev) {
    case 'JavaScript':
      z = 'функции, замыкания';
      break;
    case 'backend':
      z = 'Node.js';
      break;
    case 'FRONTEND':
      z = 'Angular2';
      break;
    default:
      z = 'Вы пропустили параметр';
      // Если ничего не прошло, тогда это
  }
  return z;
}


let harderFunction = checkParam();

