var str1 = 'JavaScript is rule';
var str2 = 'PHP is cool';
var str3 = 'JavaScript is is is is rule';

const checkIfRule = (str) => {
    console.log(/rule/.test(str) ? 'cool' : 'PHP');
  }
  /*

  Напишите функцию, которая в str3, сделать чтобы is остался 1
  Вам нужно использовать РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ!

  */

const removeIs = (str) => {
  return str.replace('is', 'hot')
    .replace(/is /g, '')
    .replace('hot', 'is');
}

console.log(removeIs(str3)) // JavaScript is rule





// checkIfRule(str1) // cool!;
// checkIfRule(str2) // PHP;  хардкод





var str = 'На дворе трава На дворе трава, на траве дрова';