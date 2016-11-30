/*
1. Напишите функцию которая принимает в качестве аргумента массив и элемент массива
  добавляет элемент в конец массива

*/
let arr = [];

function addToArray(arr, newElem) {

}

addToArray(arr, 35);

console.log(arr) // [35]
addToArray(arr, 35);

console.log(arr) // [35,35]



addToArray(arr, { functionTypes: ['functionExpression', 'functionDeclaration'] });
console.log(arr) // [35, 35, { functionTypes: ['functionExpression', 'functionDeclaration'] }]


/*
2. Напишите функцию которая получает 3 параметра и возвращает объект типа: 
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }
  

*/

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));

/* {
   argument1:'protocol',
   argument2:{url:'22'},
   argument3:8000
}*/

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));
/* {
   argument1:'77',
   argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
   argument3:PRIVET KAK DELA CHTO NOVOGO
}*/


/*
-> @@ SUPER
 Напишите функцию, которая будет возвращать 'Fizz' если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5, 'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

function fizzBuzz() {
    /* Ваш код здесь */
}

fizzBuzz(1) // 1
fizzBuzz(2) // 2
fizzBuzz(3) // 'Fizz'
fizzBuzz(5) // 'Buzz'
    // ...
fizzBuzz(15) // 'FizzBuzz'
fizzBuzz(21) // 'Fizz'