const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "celine",
  database: "my_first_db",
});

function getEveryCourse(callback) {
  const queryString = " SELECT * FROM courses";
  connection.query(queryString, function (err, results) {
    const allCourses = results;
    callback(allCourses);
  });
}
function getEveryStudent(callback) {
  const queryString =
    "SELECT name, CONCAT('http://localhost:3000/students/', id) AS url FROM students";

  connection.query(queryString, function (err, results) {
    callback({
      count: results.length,
      results: results,
    });
  });
}

function getOurStarPupil(callback) {
  const queryString = "SELECT * FROM students WHERE id = 1";
  connection.query(queryString, function (err, results) {
    const starPupil = results[0];
    callback(starPupil);
  });
}

function getOurPupilsById(id, callback) {
  const queryString = `SELECT id,
                              name,
                              origin,
                              email,
                              CONCAT("http://localhost:3000/courses/", course_id) AS Course_Title,
                              FROM students
                              WHERE id = ?`;
  const params = [id];

  connection.query(queryString, params, function (err, results) {
    callback(results[0]);
  });
}

module.exports = {
  getEveryStudent,
  getOurStarPupil,
  getEveryCourse,
  getOurPupilsById,
};
