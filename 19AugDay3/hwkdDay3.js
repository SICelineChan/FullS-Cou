/*let multiplier = 3;
let counter = 0;
let output = " ";
while (counter <= 5) {
  counter = counter + 1;
  //counter += 1;
  let multiOf3 = "Buzz;";
  output = output + multiplier * counter + multiOf3 + " ";
}
console.log(output);*/
let output = " ";

for (i = 1; i < 101; i++) {
  output = " " + i + " ";
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log(i);

/*let output = "";

for (let counter = 1; counter <= 100; counter++) {
  output = "" + counter + "";
  if (counter % 3 == 0 && counter % 5 == 0) {
    console.log("FizzBuzz");
  } else if (counter % 3 == 0) {
    console.log("Fizz");
  } else if (counter % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(counter);
  }
}*/
