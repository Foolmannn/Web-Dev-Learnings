import path from "path"
// importing path module 

// console.log(path)

let myPath = "F:\\Web Dev Learnings\\backendlearnings\\87filehandlinginJS\\Aboutpath.js "

console.log(path.extname(myPath)) // give the extension of the path 

console.log(path.dirname(myPath)); // gives the full directory path name

console.log(path.basename(myPath)) // give the name of the file at the given path 


console.log(path.join("c:/","programs\\harry.txt")) // this helps to give us the path name by joining the paths 


