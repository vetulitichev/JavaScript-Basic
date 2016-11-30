let myName = 'Egor';

function showHelloInConsole(name) {
  //var myName = 'Egor';
  console.log(name);
}


showHelloInConsole(myName);

myName = 'Oleg';


function add(number1, number2) {
  return number1 + number2;
}

console.log(add(3, 5));
var fifty = add(20, 30);

console.log(fifty);

function helloMyNameIs(name) {
  //1. Функция должна возвращать что-то
  return 'Hello, my name is ' + name;
  //2. Hello, my name is %name%
}

let Oleg = helloMyNameIs('Oleg');
let Masha = helloMyNameIs('Masha');
let Sveta = helloMyNameIs('Sveta');


console.log(Oleg); // Hello, my name is Oleg
console.log(Masha); // Hello, my name is Masha
console.log(Sveta); // Hello, my name is Sveta


//
//
//
//
//
//
//
//
//
//
//
//test(); //--asd
//
//let userName = 'Oleg';
//
//function showUserName() {
//  console.log('He name is ' + userName);
//
//}
//
//showUserName();
//

/
//functionExpression();
//functionDecalaration();