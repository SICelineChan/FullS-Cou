let array = ["Andi", "Stefan", "Jan", "Ring", "Agustina", "Celine", "Ringo"];
let shortest = array[0];
console.log("Initially variable shortest = " + shortest.length); // at the beginning variable shortest is empty
let longest = array[0];
console.log("Initially variable longest = " + longest); // at the beginning variable longest is empty
for (let index = 1; index < array.length; index++) {
  console.log("Current array is " + array[index]);
  //console.log(array[0]); //First array, always == Andi
  // first loop, we don't know if the first array is shortest or longest, so we assume Andi is both the shortest and the longest, therefore...
  /*if (index == 0) {
    // first loop
    shortest = array[0];
    console.log("Loop " + index + " variable shortest = " + shortest);
    longest = array[0];
    console.log("Loop " + index + " variable longest = " + longest);
  } //after first loop
  else  { */
  //compare current array with shortest
  if (array[index].length < shortest.length) {
    shortest = array[index];
  }
  //compare current arry with longest
  else if (array[index].length > longest.length) {
    longest = array[index];
  }
  //}
}
console.log("shortest is " + shortest);
console.log("longest is " + longest);
