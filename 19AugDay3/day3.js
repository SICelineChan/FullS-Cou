let prompt = require("prompt-sync")();

/*let counter = 1;
let output = " ";
while (counter <= 5) {
  output = output + counter + " ";
  counter = counter + 1;
}
console.log(output);*/

let multiplier = 3;
let counter = 0;
let output = " ";
while (counter <= 5) {
  counter = counter + 1;
  //counter += 1;
  output += multiplier * counter + " ";
  console.log(output);
}
