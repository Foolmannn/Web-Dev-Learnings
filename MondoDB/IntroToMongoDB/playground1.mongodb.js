//playground in mongodb are the scripts that can be run and it has the extension filename.mongodb.js 

// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use. which is sigma 
use('sigma');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "price": 20000,
    "instructor": "Sujal"
  },
  {
    "name": "Python",
    "price": 18000,
    "instructor": "Ramesh"
  },
  {
    "name": "JavaScript",
    "price": 15000,
    "instructor": "Aman"
  },
  {
    "name": "C++",
    "price": 17000,
    "instructor": "Sita"
  },
  {
    "name": "MongoDB",
    "price": 14000,
    "instructor": "Kiran"
  }
]);


// Print a message to the output window.
console.log("Inserted Data sucessfully");


