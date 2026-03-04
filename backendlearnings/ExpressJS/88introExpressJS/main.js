// Express doc URL https://expressjs.com/ 

// npm i express in terminal for the initializatin of the express 


const express = require('express')
const app = express()
const port = 3000



app.use(express.static('public')) // this code help to serve the static files publicly and multiple file can also be served here the public in code is the name of the folder which you want to share 

// app.get or app.post or app.put or app.delete (path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello this is about page!')
})

app.get('/contact', (req, res) => {
  res.send('Hello This is contact page !')
})

app.get('/blog', (req, res) => {
  res.send('Hello This is Blog!')
})




// app.get('/blog/intro-to-python', (req, res) => {
    //     // logic to fetch intro to python from the db
    
    //   res.send('Hello This is Blog! about intro to pythonb ')
    // })
    
    // this above approach is tidious as for each endpoint we need to define in hard code 

    // so express provides the req.params modules to add the slug( web link ) easily 
    // here slug in the code below is the variable 
    app.get('/blog/:slug', (req, res) => {
        console.log(req) // this gives the multiple info about the request made

        //for the url: http://127.0.0.1:3000/blog/mongodb?mode=dark&region=np
        console.log(req.params) // will output: {slug : 'mongodb'}
        console.log(req.query) // will op : {mode:dark , region: 'np' }
      res.send(`Hello This is Blog! on ${req.params.slug}`)
    })
    
    app.get('/blog/:slug/:second', (req, res) => {
        // logic to fetch {slug} from the db
        
      res.send(`hello this is blog on  ${req.params.slug} about the ${req.params.second}`)
    })
    
    
    
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
    
    