use("CrudDB");

db.createCollection("courses");

// db.courses.insertMany([
//   {
//     name: "Python For begineers",
//     price: 0,
//     assignments: 12,
//     projects: 3,
//   },
//   {
//     name: "Python For Beginners",
//     price: 0,
//     assignments: 12,
//     projects: 3,
//   },
//   {
//     name: "JavaScript Basics",
//     price: 10,
//     assignments: 15,
//     projects: 5,
//   },
//   {
//     name: "Node.js Fundamentals",
//     price: 20,
//     assignments: 10,
//     projects: 4,
//   },
//   {
//     name: "MongoDB Complete Guide",
//     price: 15,
//     assignments: 8,
//     projects: 2,
//   },
//   {
//     name: "React for Beginners",
//     price: 25,
//     assignments: 14,
//     projects: 6,
//   },
// ]);


//READ

let a = db.courses.find({price: 10})

console.log(a.count()); // gives the no of the matching documents 
console.log(a.toArray()); // give the result set if there are multiple results


let b = db.courses.findOne({price: 0}) // grabs the first one to match

console.log(b)



//UPDATE
db.courses.updateOne({price :0}, {$set:{price :100}})
// Finds the first document where price = 0

// Updates only that one document

// Sets the price to 100


db.courses.updateMany({price :0}, {$set:{price :1000}}) // Finds all documents where price = 1000 Updates every matching document

//DELETE

db.courses.deleteOne({price:100}) // delete first matched one 


db.courses.deleteMany({price:25}) // delete all the documents matching 
