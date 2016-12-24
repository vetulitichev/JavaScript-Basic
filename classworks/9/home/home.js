'use strict';

// TASK 1
// Отобразите достаточно ли developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого разработчика метод goodDev
/*
 Количество требований к разработчику совпадает с его навыками.
 
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requires: ['Node.js', 'JavaScript', 'OOP'],
  goodDev
};

let developer2 = {
  experience: [{ technology: 'java' }, { technology: 'c++' },
    { technology: 'aws' }, { technology: 'docker' }],
  requires: ['java', 'json', 'c++', 'JavaScript'],
  goodDev
};

let developers = [developer1, developer2];


function goodDev(argument1, argument2) {
  
}

developers.forEach(dev => dev.goodDev());
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
 * Создайте объект содержащий коллекцию элементов с одинаковыми свойстами и разными значениями!
 * Создайте функция которая сортирует объект по заданному свойству
 * При вызове функции используйте this
 *
 *
 * */

//{age:10, name:'b'}, {age:15, name:'c'} {age:25, name:'A'}

myObject.myFilter('age');
myObject.myFilter('name');


/*
 *
 * TASK 3
 *
 * Ваши приложения!
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

