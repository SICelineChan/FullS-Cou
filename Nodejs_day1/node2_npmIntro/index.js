const express = require("express");
const app = express();

const port = 3000;
let counter = 0;
// This is the home page that the server is getting
app.get("/", function (req, res) {
  res.send("Are you looking for this webpage?");
});
app.get("/hello", function (req, hello) {
  hello.send("hello there! You clicked here to this local host 3000");
});
app.get("/counter", function (req, number) {
  counter += counter++;
  number.send(String(counter));
});

app.listen(port, function () {
  console.log(`Listening to port ${port}...`);
});
