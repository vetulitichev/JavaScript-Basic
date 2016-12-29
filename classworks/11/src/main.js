function User(name) {
  
  // var this = {};
  this.name = name;
  // return this;
  
}

var petya = new User('Petr');

function Car(color, model, doors, wheel) {
  this.color = color;
  this.model = model;
  this.doors = doors;
  this.wheel = wheel;
}

let van = new Car('orange', 'van', 4, 4);
let audi = new Car('aqua', 'audi', 2, 4);



//
//*
//* Создайте 3 объекта,
//* каждый следующий объект должен наследовать свойства предыдущего
//*
//*
//* */