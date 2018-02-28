// required by the index.html
// will be executed in the renderer process for that window.
// All Node.js APIs are available in this process. :D

const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');
const url = require('url');
const os = require('os');
const { remote } = require('electron');

function interfaceStringFormat(str){

}

function interfaceList(){
  let active = os.networkInterfaces();
  console.log(active);
  return active;
}

// ****** Remote Pinapple connection form ******
const pineBtn = document.getElementById("pineForm");
pineBtn.onclick = function(){

  let pineappleForm = new remote.BrowserWindow({
    parent: remote.getCurrentWindow(), 
    show: false,
    width: 500,
    height:500
  });

  pineappleForm.loadURL(url.format({
    pathname: path.join(__dirname, '../html/pineForm.html'),
    protocol: 'file:',
    slashes: true
  }));

  pineappleForm.once('ready-to-show', () => {
    pineappleForm.show()
  });

  pineappleForm.on('closed', function () {
    pineappleForm = null
  });
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