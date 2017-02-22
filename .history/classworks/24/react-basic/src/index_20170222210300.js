import React from 'react';
import ReactDOM from 'react-dom';

let mountNode = document.getElementById('app');

class App extends React.Component {
  render() {
    let arr = [1, 2, 3];
    return (
      <div>
        <h1> My first React Component {arr}</h1><h2>Hello</h2>
      </div>
    )
}


ReactDOM.render(<App />, mountNode);