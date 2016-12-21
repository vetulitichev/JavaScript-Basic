'use strict';
////////@ TODO -- LVL Strong Junior
/*
 *
 * TASK 2
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с коьторым связывается метод
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

//function addMethod(object, name, fn) {
//
//}

function addMethod(object, name, fn) {
  
  let old = object[name];
  
  object[name] = function() {
    if ( fn.length == arguments.length ) {
      return fn.apply(this, arguments)
    } else if ( typeof old == 'function' )
      return old.apply(this, arguments)
    
  };
}


addMethod(junior, 'ok', function() {console.log(arguments.length)});
addMethod(junior, 'ok', function(one) {console.log(arguments.length)});
addMethod(junior, 'ok', function(one, two) {console.log(arguments.length)});
addMethod(junior, 'ok', function(one, two, three) {console.log(arguments.length)});

junior.ok(1);
junior.ok(1, 2);
junior.ok(1, 2, 3);