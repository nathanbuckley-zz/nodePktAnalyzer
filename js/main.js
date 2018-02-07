// required by the index.html
// will be executed in the renderer process for that window.
// All Node.js APIs are available in this process. :D

const React = require('react');
const ReactDOM = require('react-dom');
const os = require('os');

function interfaceStringFormat(int){

}

function interfaceList(){
  let active = os.networkInterfaces();
  console.log(active);
  return active;
}

const interfaceEl = (
  <div>
  <h1>Hello, Nathan! from React.js ;)</h1>
  <p>Your active interfaces are as follows: {JSON.stringify(interfaceList(), null, 2)}</p>
  </div>
);

ReactDOM.render(
  interfaceEl,
  document.getElementById('re')
);

interfaceList();