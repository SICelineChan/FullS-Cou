const db = require("./db");
const connection = db.connection;

function getAllCourses(callback) {
  const queryString =
    "SELECT title, CONCAT('/courses/', id) AS url FROM courses";
  connection.query(queryString, function (err, results) {
    callback({
      count: results.length,
      next: "Next 2 courses will come soon",
      previous: "See last 2 courses will come later!",
      results: results,
    });
  });
}

function getCourseById(id, callback) {
  const queryString = "SELECT * From courses WHERE id = ?";
  const params = [id];

  connection.query(queryString, params, function (err, results) {
    callback(results[0]);
  });
}

function getCoursesByIdWithStudents(courseId, callback) {
  const queryString = `SELECT courses.*, students.name,
    CONCAT("/students/", students.id)
    FROM courses
    LEFT JOIN students ON students.course_id = courses.id
    WHERE courses.id =?`;

  const params = [courseId];

  connection.query(queryString, params, function (err, results) {
    callback(results);
  });
}

module.exports = {
  getAllCourses,
  getCourseById,
  getCoursesByIdWithStudents,
};
