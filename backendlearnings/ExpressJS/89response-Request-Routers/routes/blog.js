const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Blogs home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog page ')
})
// http://127.0.0.1:3000/blog/about


router.get('/blogpost/:slug', (req, res) => {
  res.send(`Fetch the blog post ${req.params.slug}`)
})

// http://127.0.0.1:3000/blog/blogpost/hello this is shown by above code 
module.exports = router
