'use strict';

// TASK 1
// Отобразите достаточно ли developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev
/*
 Количество требований к разработчику совпадает с его навыками.
 
 * Используйте в задаче this
 * */

//let developer1 = {
//  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
//  requires: ['Node.js', 'JavaScript', 'OOP'],
//  goodDev
//};
//
//let developer2 = {
//  experience: [{ technology: 'java' }, { technology: 'c++' },
//    { technology: 'aws' }, { technology: 'docker' }],
//  requires: ['java', 'json', 'c++', 'JavaScript'],
//  goodDev
//};
//
//let developers = [developer1, developer2];
//
//
//function goodDev(argument1, argument2) {
//
//}


let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requires: ['Node.js', 'JavaScript', 'OOP'],
  getSkills,
  goodDev
};
let developer2 = {
  experience: [{ technology: 'java' }, { technology: 'c++' },
    { technology: 'aws' }, { technology: 'docker' }],
  requires: ['java', 'json', 'c++', 'JavaScript'],
  getSkills,
  goodDev
};

function getSkills(skillName = 'skills') {
  let arr = [];
  if ( !this[skillName] ) {
    skillName = 'experience';
  }
  //console.log(this[skillName]);
  this[skillName].forEach(function(item, i) {
    if ( skillName != 'skills' ) {
      arr[i] = item.technology;
    } else {
      arr[i] = item;
    }
  });
  //console.log(arr);
  return arr;
}


//function find(arr, item) {
//   // arr = ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'];
//  // item = 'Node.js'
//    for (let i =0; i < arr.length; i++){
//        if(arr[i] == item){
//            return true;
//        }
//    }
//    return false;
//}

function goodDev(dev) {
  let skill = this.getSkills();
  //console.log(skill);
  this.requires.forEach(function(item, i) {
    if ( skill.indexOf(item) != -1 ) {
      console.log(`${item} ... success`)
    } else {
      console.log(`${item} ... fail`);
    }
  })
  
}
//developer1.goodDev();
//developer2.goodDev();

//let developers = [developer1, developer2];
//developers.forEach((dev, index) => {
//  console.log(`developer ${index + 1}`);
//  dev.goodDev();
//});
// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---
// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success


/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми
 * свойстами и разными значениями!
 * Создайте функция которая сортирует объект по заданному свойству
 * При вызове функции используйте this
 *
 *
 * */

let myObject = {
  database: [
    { age: 100, name: 'b' },
    { age: 15, name: 'c' },
    { age: 25, name: 'a' }
  ],
  myFilter(filterName) {
    return this.database.sort((a, b) => {
      //console.log(a[filterName] > b[filterName]);
      return a[filterName] > b[filterName]
    })
  }
};

//{age:10, name:'b'}, {age:15, name:'c'} {age:25, name:'A'}

console.log(myObject.myFilter('age'));
console.log(myObject.myFilter('name'));
//myObject.myFilter('name');


/*
 *
 * TASK 3
 *
 * Ваши приложения !
 * Ваше направление деятельности
 *
 * */



////////@ TODO -- LVL Strong Junior
/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *
 *  Если количество аргументов у функции fn совпадает сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов, должно давать различный результат
 *
 * */

let junior = {};

// fn.length == arguments.length

function addMethod(object, name, fn) {

}


addMethod(junior, 'ok', function() {console.log('zero arguments')});
addMethod(junior, 'ok', function(one) {console.log('one arguments')});
addMethod(junior, 'ok', function(one, two) {console.log('two arguments')});
addMethod(junior, 'ok', function(one, two, three) {console.log('three arguments')});

junior.ok(); //'zero arguments'
junior.ok(1); //'one arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1, 2, 3); // 'three arguments'

