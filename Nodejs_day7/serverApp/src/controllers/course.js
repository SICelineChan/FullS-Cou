const coursesDB = require("../databases/courses");
const studentsDB = require("../databases/students");

function courses(req, res) {
  coursesDB.getAllCourses(function (results) {
    res.json(results);
  });
}

function courseById(req, res) {
  const paramId = Number(req.params.id);
  if (!paramId) {
    res.status(404).json({
      status: "An Error has occurred!",
      description: "Invalid URL",
    });
    return;
  }

  coursesDB.getCourseById(paramId, function (result) {
    if (result) {
      studentsDB.getStudentsByCourseId(paramId, function (students) {
        result.students = students;
        res.json(result);
      });
    } else {
      res.status(404).json({
        status: "Error",
        description: "No Such Course!!!",
      });
    }
  });
}

module.exports = {
  courses,
  courseById,
};
