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
 *
 * */
