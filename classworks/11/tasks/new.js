'use strict';


/*
* Создать конструктор у который будет создавать новый объект
*
myArray = параметр1 : Array
cars = параметр2    : Object
name = параметр3      : string
* */

function Classwork2() {

}

var test = new Classwork2(['html'], {name:'qwertyy'}, 'test');
// {myArray:['html'], cars:{name:'qwerty'}, name:'test'}
var test25 = new Classwork2(['www'], {name:'qwertyy'}, 'HNY');   //



function Counter() {
  let counter = 0;
  
  this.add = function() {
    console.log(counter++)
  };
  
  this.minus = function() {
    console.log(counter--)
  }
}

var one = new Counter();
one.add(); // 0
one.add(); // 1
var two = new Counter();


// Создайте функцию конструктор, которая в зависимости
// от количества параметров создавтаь объект с разным количеством свойств

function Example(one, two, three) {
  

}

//let one = new Example('hi'); // {one:'hi'}
let one2 = new Example('123123123'); // {one:'123123123'}
//let two = new Example('ok', 'this'); // {one:'ok', two:'this'}
let three = new Example('OOP', 'with', 'love'); // {one:'OOP', two:'with', three:'love'}

// Создайте функцию конструктор, которая иметь приватный счетчик,
// данный счетчик можно будет увеличить только вызвав метод counter()