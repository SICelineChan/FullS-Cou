function triangle(size, slope) {
  for (let line = 0; line < size; line++) {
    let output = " ";
    let stars = (line + 1) * slope;

    for (let x = 0; x < stars; x++) {
      output += "*";
    }
    console.log(output);
  }
}

triangle(4, 1);
