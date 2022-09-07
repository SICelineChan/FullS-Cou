function triangle(size) {
  for (let index = 0; index < size; index++) {
    let output = " ";
    for (let x = 0; x <= index; x++) {
      output += "*";
    }
    console.log(output);
  }
}

triangle(5);
// Add a slope in the argument of the triangle
function triangle(size, slope) {
  for (let index = 0; index < size; index++) {
    let output = " ";
    console.log(output);
    for (let x = 0; x <= index; x++) {
      output += "*";
    }
    console.log(output);
  }
}

triangle(5);
