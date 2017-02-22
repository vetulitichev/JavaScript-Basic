import React from 'react';
import ReactDOM from 'react-dom';

let mountNode = document.getElementById('app');

class App extends React.Component {
  render() {
    let 
    return <h1> My first React Component {1+1}</h1>
  }
}


ReactDOM.render(<App />, mountNode);