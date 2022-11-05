const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "celine",
  database: "my_first_db",
});
// USE my_first_db
const queryString = `
  SELECT * 
  FROM courses
  LEFT JOIN school_location ON courses.course_id = school_location.course_id
  `;
connection.query(queryString, function (err, results) {
  if (err) {
    console.log("There's an error!");
    return;
  }
  //   console.log(results);
  //console.log(results[1].name);
  for (let i = 0; i < results.length; i++) {
    console.log(
      `The course name is ${results[i].name} and the teacher will be ${results[i].teacher}. `
    );
  }
});
