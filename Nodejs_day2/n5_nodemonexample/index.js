const express = require("express");
const app = express();

const port = 3000;

app.get("/", function (req, res) {
  res.send("Welcome to this very nice website!");
});

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
