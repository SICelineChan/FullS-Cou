let ppl = ["Jan", "Andi", "Stefan", "Rene", "Agustina", "Celine", "Ringo"];

let first_str = ppl[0].length;
let answer = ppl[0];
console.log(answer + " picking up the first array");
//print Jan
for (let i = 0; i < ppl.length; i++) {
  let charalength = ppl[i].length;
  if (charalength < first_str) {
    // changing to charalength < first_str will give answer = Jan and first_str = 3

    // changing to (charalength === 4), it will give answer = Rene, first_str = 4
    answer = ppl[i];
    first_str = charalength;
  }
}
console.log(answer);

console.log(first_str);
