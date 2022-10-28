const express = require("express");
const app = express();

const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello I will show up in your client browser");
});

app.get("/about", function (req, res) {
  res.send("This is the about page");
});

app.get("/calculate", function (req, res) {
  const num1 = req.query.num1 || 0;
  const num2 = req.query.num2 || 0;

  const result = Number(num1) + Number(num2);

  res.send(`${num1} + ${num2} = ${result}`);
});

app.get("*", function (req, res) {
  res.send("This page will not exist.");
});

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
