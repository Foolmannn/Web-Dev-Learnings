import express from "express";
import mongoose from "mongoose";
import Employee from "./models/Employee.js";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/company");

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateEmployees() {
  const names = ["Harry", "Suman", "Amit", "Priya", "David"];
  const languages = ["Python", "JavaScript", "Java", "C++", "Go"];
  const cities = ["New York", "Kathmandu", "London", "Tokyo", "Delhi"];
  const salaries = [300000, 400000, 500000, 600000];

  let employees = [];

  for (let i = 0; i < 5; i++) {
    employees.push({
      name: getRandom(names),
      salary: getRandom(salaries),
      language: getRandom(languages),
      city: getRandom(cities),
      isManager: Math.random() > 0.5
    });
  }

  return employees;
}

app.post("/generate", async (req, res) => {
  const employees = generateEmployees();

  await Employee.insertMany(employees);

  res.json({ message: "Random data inserted!", data: employees });
});

app.use(express.static("public"));

app.listen(3000, () => console.log("Server running on port 3000"));