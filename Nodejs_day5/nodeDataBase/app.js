const db = require("./database/myDatabase");
const express = require("express");
const mysql = require("mysql2");
const app = express();

const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  db.getStudents(function (results) {
    const templateData = {
      students: results,
    };
    res.render("index", templateData);
  });
});

app.get("/courses", function (req, res) {
  db.getCourses(function (results) {
    const templateData = {
      courses: results,
    };
    res.render("courses", templateData);
  });
});

app.get("/aStudent", function (req, res) {
  const number = req.query.number;
  console.log(number);

  db.getStudentByNumber(number, function (results) {
    const templateData = {
      pupil: results[number],
    };
    res.render("aStudent", templateData);
    console.log(results);
  });
});

app.listen(port, function () {
  console.log(`Listening to ${port} now!!!`);
});
