import fs from 'fs/promises'

let a = await fs.readFile("harry.txt")

// let b= await fs.writeFile("harry.txt", "This is the file using the fs module with promises ")

let b= await fs.appendFile("harry.txt", "\n\n\n\n\nThis is the file using the fs module with promises ")

console.log(a.toString())

