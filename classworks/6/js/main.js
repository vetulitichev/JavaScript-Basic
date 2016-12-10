'use strict';

let arr = [];

console.log(typeof arr); //object

console.log(Array.isArray(arr)); // true
let listOfCompanys = [
  {
    "company": "ASIMILINE",
    "name": {
      "last": "Watkins",
      "first": "Lindsay"
    },
    "eyeColor": "brown",
    "age": 20,
    "picture": "http://placehold.it/32x32",
    "balance": "$1,091.09",
    "isActive": true,
    "guid": "294814e3-4c89-428f-b0c9-da5c4c37ea5e",
    "index": 0,
    "_id": "584babb6eeb4137cf14c37a3"
  },
  {
    "company": "ENJOLA",
    "name": {
      "last": "Price",
      "first": "Greene"
    },
    "eyeColor": "brown",
    "age": 39,
    "picture": "http://placehold.it/32x32",
    "balance": "$3,533.55",
    "isActive": true,
    "guid": "e7b0824f-d6d1-4a82-b2c5-cd7a1ec8310c",
    "index": 1,
    "_id": "584babb6c7be9c2398ed263f"
  },
  {
    "company": "ZINCA",
    "name": {
      "last": "Robertson",
      "first": "Barbara"
    },
    "eyeColor": "brown",
    "age": 22,
    "picture": "http://placehold.it/32x32",
    "balance": "$1,395.22",
    "isActive": false,
    "guid": "0735d8d9-a165-4ad1-893f-e821da37bf63",
    "index": 2,
    "_id": "584babb6cca4dbefa6001820"
  },
  {
    "company": "TALKOLA",
    "name": {
      "last": "Cooke",
      "first": "Lea"
    },
    "eyeColor": "blue",
    "age": 31,
    "picture": "http://placehold.it/32x32",
    "balance": "$3,074.16",
    "isActive": false,
    "guid": "7d13cbc4-6b4d-4954-b3d3-df3cfe5f2373",
    "index": 3,
    "_id": "584babb6391a2b568f1e9416"
  },
  {
    "company": "GEEKKO",
    "name": {
      "last": "Webb",
      "first": "Kline"
    },
    "eyeColor": "blue",
    "age": 34,
    "picture": "http://placehold.it/32x32",
    "balance": "$1,520.21",
    "isActive": false,
    "guid": "2b179de0-a659-4423-b3c4-11c6490e5c74",
    "index": 4,
    "_id": "584babb66d6ea73e8ed51208"
  }
];


// Функция которая фильтрует значения между заданными 2 и 3 аргументом

function sum(arr) {
  
}

let users = [{ name: 'Sasha' }, { name: 'Vera' }, { name: 'Sereja' }];

let usersWithUserNames = users.map(function(el, index, array) {
  // Иммутабельные данные
  el.id = index + 1;
  
  // Мутабельные данные
  return { userName: el.name, id: index + 1 }
  
});

console.log(users);
console.log(usersWithUserNames);