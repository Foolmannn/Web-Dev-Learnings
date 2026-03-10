/*
Generate a dummy data in this format in a collection called employees in a db called company

{

name: "Harry",
salary: "459999",
language: "Python",
city: "New York",
isManager : ture
}


generate 10 such records when a button called the generate data is clicked!
create an Express app with mongoose to acheive it
Everytime the button is clicked, you should clear the collection 

*/
import mongoose, { mongo } from "mongoose";
import express from "express";

import {dummydata} from "./models/dummydata.js";

let conn = await mongoose.connect("mongodb://localhost:27017/dummydata");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const Dummydatas = new dummydata({
    name: "Suman",
    salary: "459999",
    language: "Python",
    city: "New York",
    isManager: true,
  });
  Dummydatas.save();
  res.send("<button>");
});
app.get("/index", (req, res) => {
res.sendFile("F:\\Web Dev Learnings\\MondoDB\\97Exercise16DummyDataGenerator\\templates\\index.html")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
