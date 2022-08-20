let output = " ";

for (let counter = 1; counter <= 10; counter++) {
  output += " " + counter;
  if (counter % 3 === 0) {
    output += " Tap!";
  }
}
console.log(output);
