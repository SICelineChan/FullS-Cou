/*let counter = 0;
let x = 0;
let output = " ";
let multiOf3 = 3;
while (counter < 5) {
  counter = counter + 1;
  x = x + counter;
  x = "Buzz";
  output = output + counter;
}
console.log(counter, x);
console.log(output);*/

/*let counter = 0;
let output = " ";

while (counter <= 5) {
  counter = counter + 1;
  // counter = 0+1
  output = output + counter + " ";
  // output = " " + 1 + " "
  counter = counter + counter;
  // counter = 1 + 1
  output = output + "tap" + " ";
}
console.log(output);
console.log(counter); */

let output = " ";
for (let i = 0; i < 100; i++) {
  if (i % 3 == 0) {
    let drei = i % 3 == 0;
    drei = "Fizz";
    output = output + drei;
  }
  if (i % 5 == 0) {
    let funf = i % 5 == 0;
    funf = "Buzz";
    output = output + funf;
  }
  if (i % 3 == 0 && i % 5 == 0) {
    let fizzbuzz = i % 3 == 0 && i % 5 == 0;
    fizzbuzz = "FizzBuzz";
    output = output + fizzbuzz;
  }
  output += i + ", ";
}
console.log(output);
