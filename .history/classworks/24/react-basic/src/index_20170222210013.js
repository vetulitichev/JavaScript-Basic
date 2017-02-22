import React from 'react';
import ReactDOM from 'react-dom';

let mountNode = document.getElementById('app');

class App extends React.Component {
  render() {
    return <h1> My first React Component </h1>
  }
}


ReactDOM.render(<h1>Hello world</h1>, mountNode);