

// require is the used in the commonjs type of the projects in node js and common js in default

// const { createServer } = require('node:http');
// const fs = require("fs");

// for the ecma script / type should be changed to the module in the package.json

// import http from "http"


//curly braces for the named exports

// import {a , b ,c} from "./mymodule.js"

// console.log(a,b,c)

// this works as the obj is default export so if no name is given it gives the default export 

// import suman from "./mymodule.js"

// console.log(suman) 


// for the common js type 

// we need to use the require\
const a = require("./mymodule2.js")
console.log(a)

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html'); // this header determines how output is showcased 
//   res.end('<hq>Hello World</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// to restart server each time while the code is altered 
// is unnecessary
 // so the nodemon package can be used to reload page automatically 
 // so npm install --global nodemon 
 // this install nodemon for whole computer(global) not just for this folder 
