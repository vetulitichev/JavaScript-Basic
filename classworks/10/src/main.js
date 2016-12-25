//let dataBase = {
//  fruits: ['apple', 'kiwi'],
//  reverse() {
//    this.fruits.forEach((el) => {
//      console.log(el.split('').reverse().join(''));
//    })
//  }
//};
//
//dataBase.reverse();
//console.log(dataBase.fruits);


// Создайте объекта
// У объекта должен быть массив
// Внутри массива, другие объекты - коллекция

let fruits2016 = {
  fruits: ['kiwi']
};


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

dataBase2.reverseFruits();

//let test = {
//  asd: function() {
//    console.log('ya asd');
//  },
//  qwe: testqwe
//};
//
//test.qwe();
//var asd = 'hello from JavaScript';
//function testqwe () {
//  debugger;
//
//  console.log(asd)
//}


/*
 * fruits1
 *  iwik
 * fruits2
 *  ognam, egnaro
 *
 * */









