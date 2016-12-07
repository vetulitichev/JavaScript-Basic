'use strict';
//Поэтому для удаления используются специальные методы: из начала – shift, с конца – pop, а из середины – splice, с которым мы сейчас познакомимся.

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ];


let technologies = "HTML,CSS,JavaScript,Node.js, Angular";
let technologiesArr = technologies.split(',');

function addNumToArray(arr) {
  for (let i = 0; i < technologiesArr.length; i++) {
    let tech = technologiesArr[ i ];
    technologiesArr[ i ] = `${(i + 1)}. ${tech}`;
  }
}

addNumToArray(technologiesArr);
console.log(technologiesArr.join(' |'));


// НАЧАЛО - shift() - удалаяет первый элемент из массива и возвращает его
// СЕРЕДИНА - splice(index[, deleteCount, elem1, ..., elemN]) - удаляет элементы из середины и возвращает данные элементы
// КОНЕЦ - pop() - удаляет последний элемент с конца и возвращает его


// slice(begin, end) - создает новый массив, сначало до конца

// push(data) - добавляет в массив
// concat(data) - создает новый массив с данными из предыдущего массива
// reverse() - переворачивает массив
// indexOf(itemValue) - возвращает Индекс значения

// unshift() - добавляет элементы вначало массива и возвращает длину массива


// STRING ->
// split(value) -

// ARRAY ->
// join(value) -



    