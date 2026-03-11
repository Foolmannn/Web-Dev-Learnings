import express from "express";
// const express = require('express');
const app = express()
import path from "path";
// const path = require('path');
const port = 3000

app.use(express.static("public"))
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!')
// res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/index', (req, res) => {
  res.sendFile("F:\\Web Dev Learnings\\TailwindCSSLearnings\\99Exercise17Tailwind\\testindex.html")
})
app.get('/home', (req, res) => {
  res.sendFile("F:\\Web Dev Learnings\\TailwindCSSLearnings\\99Exercise17Tailwind\\public\\index.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
