class App {

  row() {
      this.tableHead = {
        name: 'Name',
        surname: 'Surname',
        email: 'Email'
      };
      return `<th>${this.tableHead.map(elem=>{
      return `<td>{elem.name}</td>
      <td>{elem.surname}</td>
      <td>{elem.email}</td>`
    }).join('')}
    </th>`
  }
}

var myApp = new App();
document.querySelector('tbody').innerHTML = myApp.row();