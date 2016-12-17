let object = {};
let object2 = new Object();

object.htmlTags = ['<div>', '<ul>', '<li>'];
object['headersTags'] = ['<h1>', '<h2>', '<h3>'];
object[true] = ['HTML тэги имеют формат <названиеТэга> </названиеТэга>'];
object['one-two-three'] = [`<body><h1>Hello</h1></body>`];


function copyObject(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key]
  }
  return newObj
}

let xxx = copyObject(object);


//let newObject = object;






