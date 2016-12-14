'use strict';


let array = [1, 2, 3, 4, 5];

array.reduce(function(initialValue, arrayValue, index, arr) {
  initialValue  =+ arrayValue;
  return initialValue;
}, 0);


/* TASK 3
 * Посчитайте сколько одинаковых слов в предложении.
 * Функция должна возвращать объект у которого свойста это повторяющиеся слово,
 * а значение это количество повторений
 * */

//function wordCounter(sentence) {
//
//}

//console.log(wordCounter('Both Java and Java Script is programming and programming OOPBased Language'));
/*
 {
 Both:1,
 Java:2,
 and:2,
 Script: 1,
 is: 1
 programming: 2
 OOPBased:1,
 Language:1
 }
 */

//console.log(wordCounter('asd qwe asd'));
/*
 {
 asd:2
 qwe:1
 }
 * */

//console.log(wordCounter('url http url www url http'));

/*
 {
 http:2,
 url:3,
 www:1
 }
 * */