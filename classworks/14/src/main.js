class Human {
  sayHello() {
    console.log('Hello ' + this.name)
  }
}

class Animal {
  jump() { console.log('I\'m jumping') }
}

class Person extends Human {
  constructor(name) {
    super();
    this.name = name;
  }
}

const vasya = new Person('Vasya');

console.log(vasya instanceof Human);
console.log(vasya instanceof Person);


/*

Напишите немедленно вызываемую функцию,
которая выведет в консоле Hello

Если эту функцию присвоить в переменную - тогда переменной
присвоиться значение 'Hello'

*/


(function() {







})();