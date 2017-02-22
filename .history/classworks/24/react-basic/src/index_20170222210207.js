import React from 'react';
import ReactDOM from 'react-dom';

let mountNode = document.getElementById('app');

class App extends React.Component {
  render() {
    let arr = [1,2,3];
    return (<h1> My first React Component {arr}</h1>)
  }
}


ReactDOM.render(<App />, mountNode);