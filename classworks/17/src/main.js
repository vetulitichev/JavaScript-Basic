const url = 'https://randomuser.me/api/portraits/women';

class App {
  constructor() {
    this.url = url;
    this.app = document.querySelector('.app');
  }
  query(num) {
    let images = '';
    for (let i = 0; i < num; i++) {
      fetch(url).then(x => x.json()).then(x =>
        images += `<img src=${url}/${i}.jpg>`

      )
    }
    this.app.innerHTML = images;
  }
}

new App(url).query(10)