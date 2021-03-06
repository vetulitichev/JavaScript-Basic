'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы,
  и прибавлять их в строку
  и отображать в консоле всю строку
 *
 * */

function solution1() {
  /*ВАШ КОД*/
}

let stringBuffer = solution1();

stringBuffer('Замыкания'); //Замыкания
stringBuffer('Использовать нужно'); // Замыкания Использовать нужно
stringBuffer('ПРивет'); // Замыкания Использовать нужно ПРивет


/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */


function validBraces(str) {
  while (str.indexOf('{}') != -1 || str.indexOf('()') != -1 || str.indexOf('[]') != -1) {
    str = str.replace('{}', '').replace('()', '').replace('[]', '')
  }
  
  return str.length == 0
}

validBraces("(){}[]"); //=> returns true
validBraces("(}"); //=> returns false
validBraces("[(])");// => returns false
validBraces("([{}])"); //=> returns true

/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию,
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */

function makeCallback(fn) {
  let z = 0;
  for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
      console.log(i);
      if ( i == 10 ) {
        fn();
      }
    }, i * 1000);
    
  }
}

makeCallback(function() {
  console.log('THE LAST LAST comment')
});

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму всех натуральных чисел
 * sum(5) //5+4+3+2+1
 * Вычисления должны кешироваться, если в функцию попадает закешированное значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */

function sum(num) {
  if ( !sum.cache ) sum.cache = {};
  if ( sum.cache[num] ) {
    console.log("из кеша");
    return sum.cache[num];
  }
  
  let totalSum = num == 1 ? num : num + sum(num - 1);
  return sum.cache[num] = totalSum;
}

sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэша
sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша