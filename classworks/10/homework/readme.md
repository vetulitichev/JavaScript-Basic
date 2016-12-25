```javascript
let dataBase2 = {
  storages: [
    fruits2016,
    { fruits: ['mango', 'orange'] }
  ],
  //fruits: ['apple', 'banan'],
  reverse() {
    //console.log(this);
    this.fruits.forEach((el) => {
      console.log(el.split('').reverse().join(''));
    })
  },
  reverseFruits() {
    // storages
    let self = this;
    this.storages.forEach(function(el) {  
      self.reverse.call(el);
    });
  }
};
```
+ [call-apply](https://learn.javascript.ru/call-apply)