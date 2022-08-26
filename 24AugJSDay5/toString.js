function triangle(size) {
  for (let line = 0; line < size; line++) {
    let output = "";
    for (let x = 0; x < line; x++) {
      output += "*";
    }
    console.log(output);
  }
}

triangle(10);
