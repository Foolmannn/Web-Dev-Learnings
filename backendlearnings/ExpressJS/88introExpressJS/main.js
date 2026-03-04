// Express doc URL https://expressjs.com/ 

// npm i express in terminal for the initializatin of the express 


const express = require('express')
const app = express()
const port = 3000

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
    
    app.get('/blog/:slug', (req, res) => {
      res.send(`Hello This is Blog! on ${req.params.slug}`)
    })
    
    app.get('/blog/:slug/:second', (req, res) => {
        // logic to fetch {slug} from the db
        
      res.send(`hello this is blog on  ${req.params.slug} about the ${req.params.second}`)
    })
    
    
    
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
    
    