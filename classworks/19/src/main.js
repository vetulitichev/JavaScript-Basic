function setBlock(selector) {
  return document.querySelector(selector);
}

const block1 = setBlock('.block1')
const block2 = setBlock('.block2')
const block3 = setBlock('.block3')
const info = setBlock('.info');

const rememberBackground = function(e) {
  let currentStyle = this.style.background;
  this.style.background = 'red';
  this.style.background = currentStyle;
}

block1.addEventListener('click', rememberBackground, true);
block1.addEventListener('click', rememberBackground, false);
block2.addEventListener('click', rememberBackground, true);
block2.addEventListener('click', rememberBackground, false);
block3.addEventListener('click', rememberBackground, false);
block3.addEventListener('click', rememberBackground, true);







