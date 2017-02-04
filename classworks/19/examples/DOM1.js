// const cells = [...document.querySelectorAll('td')];

// cells.forEach(cell => {
//   cell.onclick = e => {
//     cell.style.backgroundColor = 'red'
//   }
// })

const tbody = document.querySelector('tbody');

tbody.onclick = e => {
  if (e.target.tagName == 'TD') {
    e.target.style.backgroundColor = 'red';
  }
}
