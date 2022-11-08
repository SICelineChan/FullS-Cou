const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./databases/mydb");
const port = 3000;

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello! Welcome to our lovely school");
});

app.get("/students", function (req, res) {
  db.getEveryStudent(function (results) {
    res.json(results);
  });
});

app.get("/star", function (req, res) {
  db.getOurStarPupil(function (result) {
    res.json(result);
  });
});

app.get("/courses", function (req, res) {
  db.getEveryCourse(function (results) {
    res.json(results);
    // console.log(results);
  });
});

app.get("/students/:id", function (req, res) {
  const paramId = Number(req.params.id);

  if (!paramId) {
    res.status(404).json({
      status: "There is an error",
      description: "Invalid Url",
    });
    return;
  }

  db.getOurPupilsById(paramId, function (result) {
    console.log(result);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({
        status: "An error has occurred!",
        description: "No such person!",
      });
    }
  });
});

app.listen(port, function () {
  console.log(`Now listening to port ${port}!`);
});
