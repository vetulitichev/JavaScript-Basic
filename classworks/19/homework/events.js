window.onload = () => {
  [...document.querySelectorAll('section>div')]
    .map(block => {
      return { block, width: block.offsetWidth };
    })
    .forEach(({ block, width }) => {
      block.style.flexBasis = width + 'px';
    });
};
