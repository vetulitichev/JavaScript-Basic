var promise = new Promise((resolve, reject) => {
  // resolved - промис успешно выполнен
  // rejected - отклонен

  setTimeout(
    () => {
      resolve(500);
    },
    2000
  );
});

// // .then - когда выполнился удачно. ЖЕНИЛСЯ!
// // .catch - когда выполнился не так как ожидали

// promise
//   .then(data => {
//     alert('123', data);
//     return ++data;
//   })
//   .then(x => {
//     console.log(x);
//     return x + 'hello';
//   })
//   .then(x => {
//     console.log(x);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const usersId = [1, 2, 3];
const arr = [];
let query = urlID => {
  const url = `https://jsonplaceholder.typicode.com/users/${urlID}`;
  return fetch(url).then(serverAnswer => serverAnswer.json());
};

// Promise.all(usersId.map())

// КАК ПОНЯТЬ ЧТО ВСЕ 3 запроса закончились ?
// Promise.all();

// Принимает массив из промисов, когда все промисы
// завершены, передает массив с данными в следующий вызов... .then

Promise
  .all(
    usersId.map(id => {
      return query(id);
    })
  )
  .then(arr => {
    let content = '';
    console.log(arr);
    arr.reduce(
      (a, b) => {
        content += '<pre>' + b.username + '</pre>';
        return a + b.id;
      },
      0
    );
    document.body.innerHTML = content;
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
