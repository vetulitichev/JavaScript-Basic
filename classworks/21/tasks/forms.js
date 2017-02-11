// const form = document.forms[2];
let url = 'https://easycode-js.herokuapp.com';
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   let dataForm = new FormData(form);
//   let xhr = new XMLHttpRequest();
//   // Заголовки
//   xhr.open('POST', url, true);
//   xhr.setRequestHeader('Content-Type', 'multipart/form-data');
//   xhr.send(dataForm);

//   // for (let x in dataForm) {
//   //   console.log(x);
//   // }

// });

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let input = myForm.firstElementChild;


  let xhr = new XMLHttpRequest();
  xhr.open('GET', `${url}/${input.value}/users`, true)
  xhr.send();

  xhr.onreadystatechange = () => {
    console.log(xhr.status);
    if (xhr.readyState === 4) {
      root.innerHTML += xhr.responseText;
    }
  }
})