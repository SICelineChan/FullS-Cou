const mysql = require("mysql2");
// npm install --save-dev (Only adding the dependencies)

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "celine",
  database: "classicmodels",
});
// console.log(connection);
// const queryString = "SELECT * FROM customers";
// const queryString = "SELECT productLine FROM productlines";
// const queryString = "SELECT firstName, lastName, jobTitle FROM employees";
const queryString = `SELECT *
FROM employees
LEFT JOIN offices ON offices.officeCode = employees.officeCode
ORDER BY firstName
LIMIT 5`;
connection.query(queryString, function (err, results) {
  // console.log(err);
  // console.log(results);
  if (err) {
    console.log("Error");
    return;
  }
  console.log(results);
  // for (let i = 0; i < results.length; i++) {
  //   console.log(
  //     " First Names: " +
  //       results[i].firstName +
  //       " " +
  //       "Last Names: " +
  //       results[i].lastName +
  //       " " +
  //       " Job Title: " +
  //       results[i].jobTitle
  //   );
});
