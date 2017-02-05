/*

Добавьте квадрат на страницу, с стилями
.app {
  width:100px;
  height:100px;
  background:blue;
  position:absolute;
  left:0;
}

Добавьте возможность квадрату следовать за мышкой.

*/

const app = document.querySelector('.app');
const addInfo = (eventName) => {
  document.querySelector('.info').innerHTML += '=>' + eventName
}

function calculateMoving(e) {
  app.style.left = e.pageX + 'px';
  app.style.top = e.pageY + 'px';
}

app.addEventListener('mousedown', () => {
  addInfo('mousedown')
  window.addEventListener('mousemove', calculateMoving)

  app.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', calculateMoving)
  })
})
app.addEventListener('click', () => {
  addInfo('click')
})
app.addEventListener('mouseup', () => {
  addInfo('mouseup')
})

// setInterval(() => { app.style.left = parseInt(app.style.left) + 10 + 'px' }, 1500)