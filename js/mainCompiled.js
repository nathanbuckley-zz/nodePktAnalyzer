'use strict';

// required by the index.html
// will be executed in the renderer process for that window.
// All Node.js APIs are available in this process. :D

var React = require('react');
var ReactDOM = require('react-dom');
var os = require('os');

function interfaceStringFormat(int) {}

function interfaceList() {
  var active = os.networkInterfaces();
  console.log(active);
  return active;
}

var interfaceEl = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Hello, Nathan! from React.js ;)'
  ),
  React.createElement(
    'p',
    null,
    'Your active interfaces are as follows: ',
    JSON.stringify(interfaceList(), null, 2)
  )
);

ReactDOM.render(interfaceEl, document.getElementById('re'));

interfaceList();
