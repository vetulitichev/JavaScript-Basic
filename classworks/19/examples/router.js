const links = [...document.querySelectorAll('a')];
const content = document.querySelector('.content');

function eventHandler(event) {
  event.preventDefault();
  const link = event.target.getAttribute('href');
  const data = event.target.innerHTML;
  updateContent(data);
  // history.pushState(data, link, event.target.href)
}
console.log(links);

window.addEventListener('popstate', event => {
  updateContent(event.state);
});

const updateContent = (newState) => {
  content.innerHTML = newState;
}


(function() {
  links.forEach(x => {
    x.addEventListener('click', eventHandler);
  })
})()


history.replaceState({
  header: 'header',
  main: 'main'
}, document.title, document.location.href);