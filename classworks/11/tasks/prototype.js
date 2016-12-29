function Animal(legs) {
  this.legs = legs;
}
function Cat(name) {
  this.name = name;
}

Cat.prototype = new Animal(4);

Cat.prototype.userName = function() {
  console.log(this.name + 'chka')
};

var Senya = new Cat('Senya');
var Belka = new Cat('Belka');

Cat.prototype.say = function() {
  console.log(this.name + ' say:Meow')
};

Senya.say();
Belka.say();

//var Animal = {
//  legs: 4,
//  hello() {
//    console.log(this.name);
//    console.log(this.legs);
//  }
//};
//
//var Cat = {
//  name: 'Senya'
//};
//
//Object.setPrototypeOf(Cat, Animal);
//
//Cat.hello();


/*
*
* Создайту функцию конструктор MysticalCreatures
* doMagic = console.log('some magic')
*
* Создайте функцию конструктор Эльфа!
* ears = длинные
*
* Создайте функцию конструктор Санта-Клаус!
* say = console.log('o-ho-ho')
*
*
* */













//function Elf(earsSize = 25, name) {
//  this.ears = earsSize;
//  this.name = name;
//}
//
//
//
//
//
//
//
//function Gnome(earsSize = 10, beardSize) {
//  this.name = name;
//  this.ears = earsSize;
//  this.beardSize = beardSize;
//  this.ohoho = function() {
//    console.log('ohohoho');
//  }
//}
//
//function SantaClaus(belly) {
//  this.belly = belly;
//}
//
//function Tree(name) {
//  this.name = name;
//  this.growUp = function() {
//    console.log("I'm growing up")
//  }
//}
