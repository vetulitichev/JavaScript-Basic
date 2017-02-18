let url = 'https://easycode-js.herokuapp.com/ollu/users';
let url2 = 'https://easycode-js.herokuapp.com/test/users';

let sendRequest = url => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
  xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      document.body.innerHTML += `<pre>${xhr.responseText}</pre> <hr />`;
    }
  };
};

// sendRequest(url);
// sendRequest(url2);

// xhr.open(requestType:string, url:string,
// async:boolean, ?user, ?password)
// Открыть соединение
// Отправить запрос

// let xhr = new XMLHttpRequest(); // 0. создан
// xhr.open('GET', url, true); //1. открыли соединение
// xhr.send(); // 2. отпавили
// xhr.onreadystatechange = () => {
//   // 3 - видеть данные
//   const STATUSREADY = 4;
//   console.log(xhr.readyState);
//   if (xhr.readyState === STATUSREADY) {
//     // 4 -  скачались данные
//     document.body.innerHTML += `<pre>${xhr.responseText}</pre> <hr />`;
//   }
// };
let user = { fullName: 'Oleg L.', email: 'oleglustenko@gmail.com' };
let xhr = new XMLHttpRequest();
// Заголовки
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(user));

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    document.body.innerHTML += `<pre>${xhr.responseText}</pre> <hr />`;
  }
};
