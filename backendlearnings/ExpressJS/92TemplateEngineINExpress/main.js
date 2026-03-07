const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs");// this set the view/template engine as ejs


app.get('/', (req, res) => {
    let siteName="Coseli"
    let searchText="What are you looking for ?"
    let arr = ["Pants" , "Jeans" , "Shoes"]

  res.render("index", {siteName: siteName , searchText: searchText, arr})
})


// https://github.com/mde/ejs/wiki/Using-EJS-with-Express 

// now to use the navbar we have to again define the variable in this /blog endpoint better way is to use 

// Global variables if they are same for all pages . define it once 
app.locals.siteName = "Coseli";
app.locals.searchText = "What are you looking for ?";
app.locals.arr = ["Pants" , "Jeans" , "Shoes"];


// Another solution is to use the middleware 
// Now every route afte this middleware has automatically has access to siteName.

app.use((req, res, next) => {
  res.locals.siteName= "Adidas";
  next();
});


app.get('/blog', (req, res) => {
    let blogName="Why Coseli?"
    let blogContent="Best brand domestically"
    
  res.render("blogpost", {blogTitle: blogName , blogContent : blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
