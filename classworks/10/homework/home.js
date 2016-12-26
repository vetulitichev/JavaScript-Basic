/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y;
let z = (t) => {
  let y = 10;
  return t();
};

z(x);

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

//let $ = function() {
//
//};
//
//let createBODY = $('body');
//let createDIV = $('div');
//console.log(createBODY); //<body></body>
//console.log(createDIV); //<div></div>


/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
 * *
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 
 ezjQuery.add('body')
 // <body></body>
 
 *
 *
 *
 * */



let xxx = ezjQuery.add('body') // <body></body>  * в консоле
    .add('div') //<body></body><div></div>
    .add('hello') //<body></body><div></div><hello></hello>
    .add('li', 'dadada') //<body></body><div></div><li></li>
    .render();

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри предыдущего !
 * И добавьте объекту ezjQuery метод render, который будет возвращать сгенерированную строку
 * Методу new, второй параметр, который будет размещать информацию внутри тэга
 *
 *
 example
 var helloList = ezjQuery.add('body') //<body></body>
 .add('div') //<body><div></div></body>
 .add('ul') //<body><div><ul></ul></div></body>
 .add('li', 'Hello'); //<body><div><ul><li>Hello</li></ul></div></body>
 .render()
 console.log(helloList) // <body><div><ul><li>Hello</li></ul></div></body>
 Обратите внимание, что при создании следующей переменной создание строки началось сначала
 
 var bodyDiv = ezjQuery.add('body') //<body></body>
 .add('div') //<body><div></div></body>
 .render()
 console.log(bodyDiv) //<body><div></div></body>
 
 */


// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $. Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 *
 *
 * */
