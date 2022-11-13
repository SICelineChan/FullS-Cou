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
    console.log(result);
    if (result) {
      studentsDB.getStudentsByCourseId(paramId, function (students) {
        result.students = students;
        res.json(result);
        console.log(students);
      });
    } else {
      res.status(404).json({
        status: "Error",
        description: "No Such Course!!!",
      });
    }
  });
}

function addCourse(req, res) {
  // We should probably do sanitize this date first
  const newCourse = {
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    courseEdition: req.body.courseEdition,
    teacher: req.body.teacher,
  };
  console.log(newCourse);

  coursesDB.insertIntoCourses(newCourse, function (result) {
    console.log(result);
    const id = result.insertId;
    console.log(id);
    res.send(`Added to database with id: ${id}`);
  });
}

function deleteCourse(req, res) {
  const paramId = Number(req.params.id);
  console.log(paramId);
  if (!paramId) {
    res.status(404).json({
      status: "Error",
      description: "Invalid URL, delete link not working!",
    });
    return;
  }

  coursesDB.deleteAcourseById(paramId, function (result) {
    console.log(result);

    const removedId = result.splice;
    console.log(removedId);
    res.send(
      `Ok so you have removed some course ${removedId} and the paramID was ${paramId}!`
    );
  });
}

module.exports = {
  courses,
  courseById,
  addCourse,
  deleteCourse,
};
