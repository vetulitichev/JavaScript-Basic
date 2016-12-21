var bar = "global";

function foo() {
  console.log(this.bar);
}

var obj1 = {
  bar: "это мой контекст",
  foo: foo
};

var obj2 = {
  bar: "Привет объект 2"
};





// --------

foo();              // "global"
obj1.foo();         // "obj1"
foo.call(obj2);   // "obj2"
new foo();       // undefined