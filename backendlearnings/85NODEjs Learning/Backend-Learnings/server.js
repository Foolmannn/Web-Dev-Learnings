console.log("Hello World")
// in terminal 
// npm init 
// this initialize the npm pacakge manager and create the package.json which can be used to add any packages
// npm i slugify 
// This installs the package and create the node modules folder and install the dependecies and add it to the packages .json

// if the node modules get deleted then the 
// npm install adds all the dependencies from the package.json file 

// what slugify package does is it removes the space and alter the string so that they can be used as the url as url doesnot allow all the symbols and strings 

var slugify = require('slugify')

let a = slugify("some string") // some-string

console.log(a)

// if you prefer something other than '-' as separtor
const b = slugify('some st&&(@@#@#>ring' , '_') // some_string
console.log(b)

