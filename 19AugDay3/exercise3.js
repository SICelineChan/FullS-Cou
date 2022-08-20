let counter = 1;
let output = " ";

while (counter <= 10) {
  output += counter + " ";
  if (counter % 3 == 0) {
    output += "tap" + " ";
  }
  counter = counter + 1;
}
console.log(output);
