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

app.listen(port, function () {
  console.log(`Listening to ${port} now!!!`);
});
