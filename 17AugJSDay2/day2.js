let prompt = require("prompt-sync")();

//circumference of the circle
//Math.PI - the numbers for pie

let radius = prompt("what is the radius of your circle?");
let pie = "3.14";
let circumference = 2 * radius * pie;
console.log(circumference);

//area of the circle
let area = radius * radius * pie;
console.log(area);

//the area of an isoceles triangle
console.log((radius * radius) / 2);

//pie is Math.PI
circumference = 2 * radius * Math.PI;
console.log(circumference);

console.log(
  "The circle has a radius of " +
    radius +
    " mm" +
    " and it has a circumference of " +
    circumference.toFixed(3) +
    " mm!"
);
//.toFixed is to set the number with .000 (3 decimal points)
