// define sum to add the end answer to each other
let myArrays = [8, 3, 5, 4, 1];
let sum = 0;
console.log(myArrays.length);
for (let i = 0; i < myArrays.length; i++) {
  if (myArrays[i] % 2 === 0) {
    sum += myArrays[i];
  }
}
console.log(sum + " of even number");
