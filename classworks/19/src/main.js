let query = selector => document.querySelector(selector);

const block1 = query('.block1')
const block2 = query('.block2')
const block3 = query('.block3')


block1.addEventListener('click', function(event) {
  alert(1);
  // event.stopImmediatePropagation();
})

block1.addEventListener('click', function() {
  alert(500)
})

block2.addEventListener('click', function(e) {
  e.stopPropagation();
  alert(2)
})
block3.addEventListener('click', function(e) {
  alert(3)
})