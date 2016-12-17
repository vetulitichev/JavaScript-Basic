'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные ей аргументы,
 * и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 * */

function solution1() {
  /*ВАШ КОД*/
}

solution1('Замыкания'); //Замыкания
solution1('Использовать нужно'); // Замыкания Использовать нужно
solution1('ПРивет'); // Замыкания Использовать нужно ПРивет


/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку из скобочек и посчитайте,
 * что все скобочки закрываются корректно
 *
 * */
validBraces( "(){}[]" ); //=> returns true
validBraces( "(}" ); //=> returns false
validBraces( "[(])" );// => returns false
validBraces( "([{}])" ); //=> returns true

/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию,
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */


function makeCallback(fn) {
  for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000)
  }
  fn()
}

makeCallback(function() {
  console.log('THE LAST LAST comment')
});

// @SUPER

/*
 *
 *
 *
 *
 * */