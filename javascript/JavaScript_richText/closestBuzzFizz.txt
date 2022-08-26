let counter = 0;
let output = " ";

while (counter < 100) {
  counter = counter + 1;
  if (counter % 3 === 0) {
    let drei = (counter % 3 === 0);
    drei = "Fizz";
    output = output + drei;

  } if (counter % 5 == 0) {
    let funf = (counter % 5 == 0);
    funf = "Buzz";
    output = output + funf;
  }
  output = output + counter + ", ";
}
console.log(output);