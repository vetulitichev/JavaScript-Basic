/* Created by dev on 27.11.16. */
'use strict';
//
//var asd = null;
//var name = 'Oleg';
//
//var myNumber = 5;
//
//var topHeader = null;
//
//console.log(myNumber);


// ЕСЛИ
//if ( asd == 1 ) {
//  console.log('privet kak dela');
//}
//// ИНАЧЕ ЕСЛИ
//else if ( asd == 5 ) {
//  console.log('число 5')
//}
//// ИНАЧЕ
//else {
//  //alert('yahoo !')
//  console.log('yahoo !')
//}


/* Created by dev on 26.11.16. */
//'use strict';
//if ( '1' == 1 ) {
//  console.log('hello!');
//} else {
//  console.log('what?');
//}
//

//if ( '123' != 1 + '23' ) {
//  console.log('Какое число получилось ?')
//} else {
//  console.log('Или это число ?')
//}

//if ( null === undefined ) {
//  console.log('В чем правда брат ?')
//} else if ( null === undefined ) {
//  console.log('Или это число ?')
//} else {
//  console.log("где я ?")
//}

//
//if ( !0 == true ) {
//  console.log('dada privet!');
//}
//
//let theMan = 'qwerty';
//if(typeof theMan == 'string') {
//  console.log('Hi');
//}


/*
 Практическая часть:
 Напишите условие, в котором сценарий пойдет по альтернативной ветке.
 Будет содержать 2 уровня вложенности и будет выполняться самый нижный уровень вложенности
 if () {
 
 } else {
 if() {
 if() {
 {ВЫПОЛНЯЕТСЯ ДАННОЕ УСЛОВИЕ И ЭТО УСЛОВИЕ ОТОБРАЖАЕТСЯ
 В КОНСОЛЕ}
 }
 }
 }
 */
// ничего не возвращает
//alert('Выведет сообщение в браузере через модальное окно');
//// возвращает значение
//var userName = prompt('Назовите ваше имя ?','Не меньше 20 символ');
//console.log(userName);
////возвращает true или false
//console.log(confirm("Вопрос да/нет"));

// typeof <название переменной> == <чему равно>

/*
 Classwork 3 - Задача 1:
 
 Сделайте калькулятор в браузере.
 Используйте prompt, Спросите у пользователя два числа
 и верните ему сумму данных чисел через alert;
 Если пользователь указал не число, выведите сообщение об ошибке
 
 */

let number1 = +prompt('Введите первое число');
let number2 = +prompt('Введите второе число');

if ( !isNaN(number1) ) {
  if ( !isNaN(number2) ) {
    alert(number1 + number2);
  } else {
    alert('Вы ввели не число')
  }
} else {
  alert('Вы ввели не число')
}







