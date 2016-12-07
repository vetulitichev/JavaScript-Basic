let user = {
  name: 'Oleg',
  birthday: '25.10.1989',
  friends: [
    { name: 'Даша', birthday: '25.11.1988' },
    { name: 'Егор', birthday: '25.10.1985' },
    { name: 'Дима', birthday: '25.10.1985' } ],
  myCars: []
};

// ????

//let arr = [ 1, null, undefined, 'str', {}, [], function() {} ];

//console.log(user);
//for (let key in user) {
//  console.log(key, ':', user[ key ]);
//console.log(user['friends']);
//if ( key == 'name' ) {
//  console.log(user[ key ]);
//}
//console.log(key);
//console.log(typeof key);
//console.log(typeof user[key]);
//console.log(user[ key ]);
//}

//for (let i = 0; i < arr.length; i++) {
//  console.log(arr[ i ]);
//}


//let JavaScript = 'JavaScript OOP based, functional programming Language. Learning JavaScript in past 2016 is cool';
//
//for (let i = 0; i < JavaScript.length; i++) {
//  console.log(JavaScript[ i ]);
//}
//
user = {
  name: 'Oleg',
  birthday: '25.10.1989',
  friends: [
    { name: 'Даша', birthday: '25.11.1988' },
    { name: 'Егор', birthday: '25.10.1985' },
    { name: 'Саша', birthday: undefined },
    { name: 'Дима', birthday: '25.10.1985' } ],
  myCars: []
};

/*
 -> Задание Напишите цикл, который отобразит в консоле имя
 пользователя и отобразит имена всех друзей.
 Если дата рождения неизвестна, тогда данного друга не отображать.
 */


for (let key in user) {
  
  if ( key == 'name' ) {
    console.log(user[ key ]);
  }
  
  if ( key == 'friends' ) {
    let friends = user[ key ];
    
    //friends.forEach(function(value, index) {
    //  'use strict';
    //  console.log(value);
    //});
    
    for (let i = 0; i < friends.length; i++) {
      let friend = friends[ i ];
      callback(friend);
    }
    
    //forEach(friends, function(value) {
    //  'use strict';
    //  console.log(value);
    //});
    
  }
}

//function forEach(arr, callback) {
//  for (let i = 0; i < arr.length; i++) {
//    let friend = arr[ i ];
//    callback(friend);
//  }
//}

//let num = 0;
//while (num < 100) {
//  if ( num > 25 ) {
//    console.log('THE END');
//    break;
//  }
//  console.log(num);
//  num++
//}


/*
 Напишите функцию, которая принимает 2 аргумента: массив и число.
 И возвращает сумму чисел в массиве которые больше заданного второго аргумента
 */