import React from 'react';
import ReactDOM from 'react-dom';

let mountNode = document.getElementById('app');
console.log(mountNode);

ReactDOM.render(<h1>Hello world</h1>, mountNode);