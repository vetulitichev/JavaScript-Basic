//let myObject = {
//  myMethod: function() {
//    for (let i in myObject) {
//      console.log(i);
//    }
//  },
//  es5Methods() {
//    Object.keys(myObject)
//        .forEach(function(value) {
//          //console.log(value);
//          console.log(value, '---', myObject[value])
//        });
//  },
//  get length() {
//    return myObject.random;
//  },
//  set length(x) {
//    console.log('olala');
//    myObject.random = x;
//  },
//  random: 10
//};
//
//myObject.es5Methods();


let sum = function(a, b) {
  return a + b;
};

let es5sum = (argument1, argument2) => {
  return argument1 + argument2;
};

es5sum(100, 200);

let es6sum = (a, b) => a + b;

let sumOfArray = arr => arr.reduce((a, b) => a + b, 0);



//Напишите функцию которая будет фильтровать значения в массиве больше 5
//используйте функции стрелки
//
//
//let filterMoreThenFive = (arr) => arr.filter((value, index) => {
//
//  })
//}

//filterMoreThenFive([0,1,20,30,5,10]) //20,30,10



/*
 *
 * HOMEWORK 6
 * TASK 4
 *
 // Функция принимает массив у которого есть свойста _id и Company.
 // верните объект, у которого ключ это _id, а значение Company
 Перепишите с использование es5 синтаксиса
 *
 * */


