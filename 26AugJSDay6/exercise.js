function draw_lines(lines, slope) {
  for (let i = 0; i < lines; i++) {
    console.log(add_Stars(i + 1) * slope);
  }
}
draw_lines(3);

function add_Stars(numberOfStar) {
  let output = "";
  for (let y = 0; y < numberOfStar; y++) {
    output += "*";
    //console.log(output);
  }
  return output;
}
//console.log(add_Stars(4));
