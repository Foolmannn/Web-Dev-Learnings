// MongoDB Playground Script (.mongodb.js)
// Documentation: https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

/*

Improvements made

1️⃣ Used variables instead of repeating db.getCollection()
2️⃣ Added extra field (level) to make documents realistic
3️⃣ Added try–catch for error handling
4️⃣ Printed inserted count
5️⃣ Used console.table() for better output visualization
6️⃣ Stored documents in an array variable
*/


// Select the database
use("sigmaweb");

// Reference the collection
const coursesCollection = db.getCollection("courses");

// Course documents
const courses = [
  {
    name: "Java",
    price: 20000,
    instructor: "Sujal",
    level: "Intermediate"
  },
  {
    name: "Python",
    price: 18000,
    instructor: "Ramesh",
    level: "Beginner"
  },
  {
    name: "JavaScript",
    price: 15000,
    instructor: "Aman",
    level: "Beginner"
  },
  {
    name: "C++",
    price: 17000,
    instructor: "Sita",
    level: "Advanced"
  },
  {
    name: "MongoDB",
    price: 14000,
    instructor: "Kiran",
    level: "Intermediate"
  }
];

try {

  // Insert documents
  const result = coursesCollection.insertMany(courses);

  console.log("✅ Data inserted successfully!");

  const insertedCount = Object.keys(result.insertedIds).length;
  console.log("Inserted documents:", insertedCount);

  // Fetch documents
  const allCourses = coursesCollection.find().toArray();

  console.log("📚 Available Courses:");
  printjson(allCourses);

} catch (error) {

  console.log("❌ Error inserting data:");
  printjson(error);

}