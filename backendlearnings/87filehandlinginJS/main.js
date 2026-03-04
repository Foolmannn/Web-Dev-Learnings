const { error } = require("console")
const fs = require("fs")
// console.log(fs)


console.log("starting ")

// fs.writeFileSync("harry.txt", "I am the tutor of the sigma web development course",()=>{
//     console.log("Done ")})


// This fs.writeFileSync does the file creation in synchronous manner but we need the file to be create the asynchronous way 
// fs.writeFileSync can create issues 
// so the fs.writeFile is used as it schedule the file creation 


fs.writeFile("spm.txt","I am learning from the sigma web dev course ", ()=>{
    console.log("Done ")
    fs.readFile("spm.txt", (error,data)=>{

        console.log(error,data.toString())
    })
} )


fs.appendFile("spm.txt","This is apppended ", (e,d)=>{
    console.log(d)
})

console.log("ending")