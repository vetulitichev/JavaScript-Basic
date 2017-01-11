const cats = { legs: 4 };
const myCat = { name: 'Germiona' };

myCat.__proto__ = cats;

/*
 *
 * Сделайте 3 объекта:
 Объект 1 не видит свойства объектов 2 и 3
 Объект 2 видит свойства объекта 3
 Объект 3 видит свойства объектов 1 и 2
 
 *
 * */

// Создайте 3 объект
/*
 * Первый с свойством name:string
 * Второй с методом showName => this.name
 * Третий с свойствами lastName:string, name:string
 *
 * */


var userAuth = { name: 'logged' };
var isLogged = {
  showName() {
    return this.name;
  }
};

var realUser = {
  name: 'Santa',
  lastName: 'Claus'
};

userAuth.__proto__ = realUser;
realUser.__proto__ = isLogged;


console.log(userAuth.lastName); // Claus
console.log(userAuth.showName()); // logged
console.log(realUser.showName()); // Santa
console.log(realUser.showName()); // logged ! ! !


/*
 *
 *
 * */






