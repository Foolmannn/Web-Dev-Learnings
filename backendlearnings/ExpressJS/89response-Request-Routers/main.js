const express = require("express");
const app = express();
const port = 3000;

// to give the post reques others than default get request we need

// get has the limit of the 8 KB and it is sent through the url

app.use(express.static("public")); // this is middleware which helps to share the file publically 

app.get("/", (req, res) => {
  console.log("Hey i am send using the get request ");
  res.send("Hello World! using get request ");
});

app.post("/", (req, res) => {
  console.log("Hey i am send using the post request ");

  res.send("Hello World send using the post method");
});

app
  .put("/", (req, res) => {
    console.log("Hey i am send using the put request ");

    res.send("Hello World send using the put  method");
  })
  .get("/index", (req, res) => {
    // in this way request can be chained in express
    console.log("Hey its index");

    //   res.send("This is index page "); instead of sending the this text we need to send the index.html file
    // res.sendFile("templates/index.html"); this doesnot as express need the absolute path or the we need to specify the root path

    // res.sendFile('templates/index.html',{root: __dirname}); // this is specifying the root as the current directory
    res.sendFile(
      "F:\\Web Dev Learnings\\backendlearnings\\ExpressJS\\89response-Request-Routers\\templates\\index.html",
    ); // this and above will work
  });

app.get("/api", (req, res) => {
  res.json({ a: 2, b: 3, c: 4, d: 5 , name:["harry" , "suman "]});
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
