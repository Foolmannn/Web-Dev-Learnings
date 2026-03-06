const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const blog = require('./routes/blog')

// ...Order matters in middleware so the last running middleware runs according to the sequence 


app.use('/blog', blog)


// middleware is written using the app.use method 

// this is the builtin middleware to share the file to the public
app.use(express.static("public"))

//MIddleware 1 logger for our applications 
app.use((req,res,next)=>{
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    req.suman = "I am Samir";

    console.log(`${Date.now()} is a ${req.method}`)
    next()// when commented this lead the control of request not  to be handled to next 
});

//MIddleware 2
app.use((req,res,next)=>{
    console.log(req.headers)
    req.suman = "I am Suman"; // this overwrites the previous one 
    console.log("m2 in action ")
    // res.send("Control taken by the middleware")
    next() // this hands the request handle to the another which is / route below 
});

app.get('/', (req, res) => {
  res.send('Hello World!' + '\n' 
    + req.suman)
})
app.get('/about', (req, res) => {
  res.send('Hello World! from about page')
})
app.get('/contact', (req, res) => {
  res.send('Hello World! from contact page ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
