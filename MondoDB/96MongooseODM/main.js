// https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/

import mongoose from 'mongoose';
import express from 'express';

let a = await mongoose.connect("mongodb://localhost:27017/todo")


const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
