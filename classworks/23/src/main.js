const usersId = [1, 2, 3];
const arr = [];
let query = (urlID, callback) => {
  const url = `https://jsonplaceholder.typicode.com/users/${urlID}`;

  return fetch(url).then(data => data.json());
  // let xhr = new XMLHttpRequest();
  // xhr.open('GET', url, true);
  // xhr.send();
  // xhr.onreadystatechange = function() {
  //   if (xhr.readyState === 4) {
  //     let data = JSON.parse(xhr.responseText);
  //     resolved(data);
  //     // arr.push({ id: data.id, userName: data.username });
  //     callback(data);
  //   }
  // };
};

// КАК ПОНЯТЬ ЧТО ВСЕ 3 запроса закончились ?

usersId.forEach((id, index) => {
  query(id);
});
// 4. Когда 3 запроса выполняться, нужно посчитать сумму ID, отобразить username;
// if (arr.length === 3) {
//       let content = '';
//       let sum = arr.reduce(
//         (a, b) => {
//           content += '<pre>' + b.userName + '</pre>';
//           return a + b.id;
//         },
//         0
//       );
//       console.log(sum);
//       document.body.innerHTML = content;
//     }
