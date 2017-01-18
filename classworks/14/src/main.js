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


// (function() {







// })();

const div = document.createElement('div');
div.textContent = 'Hello world'
const body = document.body;
const button = document.createElement('button');
button.textContent = 'Update';

button.onclick = () => {
  if (div.textContent === 'Hello world') {
    div.textContent = 'Hello easycode students!'
  } else {
    div.textContent = 'Hello world'
  }
}

body.appendChild(div);
body.appendChild(button);