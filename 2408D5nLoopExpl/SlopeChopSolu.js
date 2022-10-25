function triangle(size, slope) {
  let output = "";

  for (let i = 0; i <= size; i++) {
    for (let x = 0; x < slope; x++) {
      output += "*";
    }
    console.log(output);
  }
}
triangle(1, 3);
