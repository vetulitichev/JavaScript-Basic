alert('Hello from Node.js world');

const links = [...document.querySelectorAll('a')];
const content = document.querySelector('.content');
const updateContent = state => {
  content.innerHTML = state;
};

links.forEach(link => {
  link.addEventListener('click', event => {
    let href = event.target.getAttribute('href');
    let state = event.target.innerHTML;

    console.log(href);
    event.preventDefault();

    updateContent(state);
  });
});
