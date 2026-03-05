const express = require("express");
const app = express();
const port = 3000;

// to give the post reques others than default get request we need

// get has the limit of the 8 KB and it is sent through the url

app.use(express.static("public"));

app.get("/", (req, res) => {
      console.log("Hey i am send using the get request ");
  res.send("Hello World! using get request ");
});

app.post("/", (req, res) => {
  console.log("Hey i am send using the post request ");

  res.send("Hello World send using the post method");
});


app.put("/", (req, res) => {
  console.log("Hey i am send using the put request ");

  res.send("Hello World send using the put  method");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
