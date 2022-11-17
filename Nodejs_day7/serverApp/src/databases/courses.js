const db = require("./db");
const connection = db.connection;

function getAllCourses(callback) {
  const queryString =
    "SELECT title, CONCAT('/courses/', id) AS url FROM courses";
  connection.query(queryString, function (err, results) {
    callback({
      count: results.length,
      next: "http://localhost:3000/courses/page/limit/5",
      previous: "null",
      results: results,
    });
  });
}

function getCourseByLimit(callback) {
  const queryString = "SELECT id, title, teacher From courses Limit 5";
  connection.query(queryString, function (err, results) {
    callback(results);
    console.log(results);
  });
}

function getCourseById(id, callback) {
  const queryString = "SELECT * From courses WHERE id = ?";
  const params = [id];

  connection.query(queryString, params, function (err, results) {
    callback(results[0]);
    //console.log(results[0]);
  });
}
// -----------------Delete a Course--------------------!!!
function deleteAcourseById(id, callback) {
  const queryString = "DELETE From courses WHERE id = ?";
  const params = [id];
  // console.log(id);
  connection.query(queryString, params, function (err, result) {
    //callback(result);
    callback(params);
    // console.log(`This is params as ${params} in the db file`);
    // console.log(`The result ${result} in the db file`);
  });
}
// -----------------Get A Course and show How Many Students!!!
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
// -------------------the app.insert to add a new course to the database
function insertIntoCourses(courseData, callback) {
  const queryString = `INSERT INTO courses VALUES(NULL, ?, ?, ?, ?)`;
  const params = [
    courseData.title,
    courseData.shortDescription,
    courseData.courseEdition,
    courseData.teacher,
  ];
  connection.query(queryString, params, function (err, result) {
    //console.log(result);
    callback(result);
  });
}

module.exports = {
  getAllCourses,
  getCourseById,
  getCoursesByIdWithStudents,
  insertIntoCourses,
  deleteAcourseById,
  getCourseByLimit,
};
