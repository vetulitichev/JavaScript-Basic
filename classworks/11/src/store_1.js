const STORE_1 = {
  name:'STORE_1',
  ownStore: [
    { name: 'random book', pages: 200, price: '25$', left: 1 },
    { name: 'Eloquent JavaScript', pages: 300, price: '20$', left: 2 },
  ],
  sell(bookName) {
    if (this.findBooks(bookName)) {
      this.delete(bookName);
      console.log('Book selled successfull, in your bank ', this.bank);
    } else {
      console.log('Книга не найдена, сделайте заказ у продавца!')
    }
  },
  findBooks(name) {
    for (let i = 0; i < this.ownStore.length; i++) {
      let theBook = this.ownStore[i];
      if (theBook.name == name) {
        return Object.assign({}, theBook, { id: i })
      }
    }
    return false;
  },
  delete(bookName) {
    let book = this.findBooks(bookName);
    if (!this.selled) this.selled = [];
    if (!this.bank) this.bank = 0;
    this.ownStore.splice(book.id, 1)
    this.selled.push(book);

    this.bank += parseInt(book.price, 10);
  },
  request() {
    SERVICES.request.call(this)
  }  
}

// STORE_1.sell('random book')