'use strict';

/*
 1. Переместите 0 в конец массива, остальные числа должны остаться неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];

function moveZeroToEnd(arr) {
  
  return arr.filter(function(element, index, arr) {
    return element !== 0
  }).concat(arr.filter(function(element, index, arr) {
    return element === 0
  }));
  
  //let arrayWithNumbers = arr.filterfunction(element, index, arr) {
  //  return element !== 0
  //}
  //let arrayZeros = arr.filter(function(element, index, arr) {
  //  return element === 0
  //});
  //console.log(arrayWithNumbers);
  //console.log(arrayZeros);
  //console.log(arr);
  
  return arrayWithNumbers.concat(arrayZeros);
}

//console.log(moveZeroToEnd(arr1));


var array = [2, 1, 2000, 4, 5, 6, 7, 8, 9, 10];

function myFilter() {
  //console.log(args);
  //return arr.filter(function(value) {
  //  return value % 2 === 0
  //})
}

myFilter(2, 1, 2000, 4, 5, 6, 7, 8, 9, 10);


/*
 2. Верните сумму двух найменьших чисел в массиве
 
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 
 */

function minimalNumber(arr) {
  let sortedArr = arr.sort(function(leftEl, rightEl) {
    return leftEl > rightEl;
  });
  
  return sortedArr[0] + sortedArr[1];
}

//minimalNumber([10, 20, 30, 1, 31, 11, 10]);
//console.log(minimalNumber([-4, -10, 25, 10]))


/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

/*
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */


// 1.ПРИЛОЖЕНИЯ ТЕЛЕФОННЫЙ СПРАВОЧНИК.

/*
 Представьте себе удобное для вас приложение телефонного справочника.
 Пропишите функционал который по вашему должен
 вот такой справочник содержать.
 
 Обязательные поля:
 
 - Имя
 - Фамилия
 - Частное лицо или Юридическое лицо
 - номера телефонов. Домашний, Рабочий, Личный
 - Аккаунты в социальных сетях
 
 */


/*
 1. Создайте Массив который будет содержать 5 ваших друзей и 2-3 компании чьими услугами вы пользуетесь.
 - Доработать структуру пользователя согласно того как вы представляете себе
 телефонный справочник из первого домашнего задания
 - Создайте переменную Users
 */

//@SUPER
/*
 1. Найдите Число отсутствующее в заданной последовательности
 
 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [0,16,24,32] => 8
 
 [4,6,8,10] => 2
 
 */

let test = [[], { html: 'css' }, 'hello', { hello: 'world' }];
let test2 = [[], { html: 'css' }, 'hello'];
let test3 = [20,30,50,60];

//test3.some(function(a) {
//  return a > 50
//});

test3.filter(function(a) {
  return a > 50
})



function isHelloInArray(arr) {
  return arr.some(function(element, index, arr) {
    return element.name;
  })
  //Есть ли у массива arr, объект у которого есть свойство hello
}

console.log(isHelloInArray(test)) //true
console.log(isHelloInArray(test2)) //false


function random(arr) {
  let step = (arr[arr.length - 1] - arr[0]) / arr.length;
  
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] + step !== arr[i + 1] ) {
      return arr[i] + step;
    }
  }
  console.log(arr[1]);
  //return arr[1] - arr[0];
  
}

random([1, 3, 5, 9])
random([0, 8, 16, 32])
random([0, 16, 24, 32])
random([4, 6, 8, 10])


/*
 2. Напишите функция которая преобразовывает открывает скобки всех вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 
 */

function openBraces(arr) {
  
}

