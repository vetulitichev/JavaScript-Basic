/* 0
Реализуйте функцию которая будет превращать трехмерный массив в двухмерный


// solution([[1, a],[2, b],[3, c]]) => [[1, 2, 3],[a, b, c]]
// solution([[1, 3, 5],[2, 4, 6]]) => [[1, 2],[3, 4],[5, 6]]
// solution([[]]) => []

*/

/*
Визуализируйте массив, если в коллекции есть свойство children, тогда создайте вложенный лист
name - свойство h1
children ul->li

Используйте innerHTML

*/

const navigation = [
  { name: 'Главная' },
  {
    name: 'Каталог',
    children: [
      { name: 'Компьютеры', children: [{ name: 'Ноутбуки' }, { name: 'Планшеты' }] }
    ]
  },
  { name: 'Телефоны' }
];

const visualArray = (arr) => {

}

document.body.innerHTML = visualArray(navigation);
