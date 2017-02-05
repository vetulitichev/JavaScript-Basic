const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');

console.log(block1);

// Эта логика о том, как собирать метрика
const metrica = {
  alert() {
    alert(25)
  }
}

// block1.onclick = function(event) {
//   this.style.backgroundColor = 'red';
// }

block1.addEventListener('click', function() {
  alert(25);
})

block1.addEventListener('click', function() {
  this.style.backgroundColor = 'red';
})



block2.onclick = changeColor;

function changeColor() {
  this.style.backgroundColor = 'red';
}