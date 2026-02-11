// Strings in JS 
console.log("String in JS ")
let a= "Suman"
console.log(a)


console.log(a[0])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5]) // It gives the undefined as Js is forgiving language as js was built to run on browser 
console.log(a[6])


console.log(a.length)

let hisname="Suman"
let friend="Samir"
console.log("His name is "+ hisname + " and his friends name is " + friend )

// When there are multiple variable we use the template using the template literals 
// Template literals uses the backticks instead of quotes to define strings 
// with its use we can use the single as well as double quote inside the string 

console.log(` His name is " ${hisname} " and his friends name is " ${friend}" `);

// Escape sequence characters are written to use teh predefined character 

// console.log("print"suman"") 
//gives error 

console.log("print\"suman\"") // (\) backslash is used to escape the sequence 

let b="  abcdefghij   klm  ";
console.log(b.toLowerCase())
console.log(b.toUpperCase())
console.log(b.length)

// Slicing the strings 


console.log(b.slice(1,4))  // 1 is included and 4 is not included and starts from the 0 index
console.log(b.slice(0,5))

// replacing 
console.log(b.replace("cd","66"))
// if more than one occurange only first will replace 

console.log(b.concat(a))
console.log(b.concat(a , "sagar" , "rahul "))

// Trimming white spaces
//only removes whitespace from the first 
console.log(b.trim())


// Note that strings are immutable ie if the string variable created then memory is not altered new variable is created if it is modified 
// new strings are created using the funtions 

console.log(a,b) // original strings are not lost

// charater at index 
console.log(b.charAt(5))

// finding the index of specific character 

console.log(a.indexOf("a"))


c="welcome"


console.log(c.startsWith("w"))
console.log(c.startsWith("x"))
console.log(c.endsWith("e"))
console.log(c.endsWith("x"))



