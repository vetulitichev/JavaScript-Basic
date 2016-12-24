const store = {};
store.job = function(job) {
  this.makeJob(store[job], store);
};
store.sell = function(book) {
  if ( store.books.indexOf(book) !== '-1' ) {
    let indexBook = this.books.indexOf(book);
    let selledBook = this.books.splice(indexBook, 1);
    return selledBook.price + selledBook.price;
  }
};
store.countBooks = function(goods) {};
store.giveSalary = function() {};
store.books = [
  { name: 'Harry Potter', pages: 510, price: '15$' },
  { name: 'Eloquent JavaScript', pages: 300, price: '20$' },
  { name: 'Secrets of JavaScript ninjas', pages: 500, price: '35$' },
  { name: 'JavaScript Patterns', pages: 200, price: '3.25$' },
];

store.stock = [
  { name: 'Happy New Year', pages: 1, price: '1$' },
  { name: 'Learning Windows in 3 steps', pages: 800, price: '100$' },
  { name: 'Happy birthday', pages: 1, price: '30$' },
  { name: 'Box', id: 1, items: ['pens', 'pencils', 'sticks'], price: '1$' }
];

let Vera = {
  name: "Vera",
  salary: 500,
  makeJob(fn, company) {
    console.log(fn);
    fn(company);
  },
  cleaning_skill() {
    console.log('Я занята уборкой');
    return this;
  }
};

store.job.call(Vera, 'sell');

let Jack = {
  name: "Jack",
  salary: 200,
  makeJob(fn) {
    fn()
  },
  sellOneBook_skill(book) {
    const SELLBONUS = 0.1;
    if ( this.books.indexOf(book) !== '-1' ) {
      let indexBook = this.books.indexOf(book);
      let selledBook = this.books.splice(indexBook, 1);
      return selledBook.price + selledBook.price * SELLBONUS;
    }
  }
};

let John = {
  name: "John",
  salary: 2500,
  makeJob(fn) {
    fn()
  },
  theBoss(employee, task) {
    return function() {
      return this[task].apply(employee, arguments)
    }
  }
};

