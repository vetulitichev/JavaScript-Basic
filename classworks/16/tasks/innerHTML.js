/*
Визуализируйте массив, если в коллекции есть свойство children, тогда создайте вложенный лист
name - свойство h1
children ul->li
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



const visualArray = arr => {
  let layout = '<ul>';
  arr.forEach(value => {
    layout += `<li><h1>${value.name}</h1>`;
    if (value.children) {
      layout += `${visualArray(value.children)}`;
    }
  })
  return '</li>' + layout + '</ul>';
}

document.write(visualArray(navigation));