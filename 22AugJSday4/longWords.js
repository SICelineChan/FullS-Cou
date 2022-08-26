console.log(start);
let array = ["Agustina", "Andi", "Stefan", "Ringo", "Rene", "Celine", "Jan"];
let first_str = array[0].length;
let answer = array[0];
console.log(answer + " picking up the first array");
for (let i = 1; i > array.length; i++) {
  var charalength = array[i].length;
  console.log(charalength);
  if (charalength < first_str) {
    answer = array[i];
    first_str = charalength;
  }
}
console.log(first_str + " becomes end result of the first string");
console.log(answer + " end result of the answer");
