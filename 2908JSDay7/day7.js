let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//console.log(something[1][1]);
// can also have 2 functions so 1 loop to run through the first set of array starting from line 12
function addup() {
  let sum = 0;
  //v = vertical direction, going down when v = 0, then it should be 1
  console.log("outter loop, the loop starts");
  for (v = 0; v < matrix.length; v++) {
    let array = matrix[v];
    console.log(matrix[v] + "when it goes through the set of the matrix");
    // h = horizontal direction, going from left to the right when

    for (h = 0; h < array.length; h++) {
      console.log("inner loop begins" + h + " the horizontal counter ");
      sum += array[h];
    }
    console.log("outer loop ends");
  }
  return sum;
}
console.log(addup());
// when
//console.log(answer);
