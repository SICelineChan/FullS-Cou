let output = " ";
function horizontal(size) {
  for (let counter = 0; counter <= size; counter++) {
    //for letting the number goes from 5 4 3 2 1 0
    //output = " " + counter + output;
    output += " *";
  }
  console.log(output);
}

horizontal(5);
