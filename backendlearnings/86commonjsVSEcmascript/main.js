


const { createServer } = require('node:http');
const fs = require("fs");


const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // this header determines how output is showcased 
  res.end('<hq>Hello World</h1>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// to restart server each time while the code is altered 
// is unnecessary
 // so the nodemon package can be used to reload page automatically 
 // so npm install --global nodemon 
 // this install nodemon for whole computer(global) not just for this folder 
