import express from "express";
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.sendFile("F:\\Web Dev Learnings\\TailwindCSSLearnings\\99Exercise17Tailwind\\public\\index.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
