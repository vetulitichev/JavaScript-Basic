/*

Сделайте таблицу 7х10, добавьте таблице border, при нажатии на одну
из ячеек цвет ячейки должен стать красным

*/

const td = [...document.querySelectorAll('td')];
const tbody = document.querySelector('tbody');

// td.forEach(elem => {
//   elem.addEventListener('click', function() {
//     this.style.backgroundColor = 'blue';
//   })
// });

window.addEventListener('click', e => {
  if (e.target.tagName === 'TD') {
    e.target.style.backgroundColor = 'green'
  }
})

