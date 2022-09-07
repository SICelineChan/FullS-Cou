function multiply(array, multiplicator) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    output[i] = element * multiplicator;
  }
  return output;
}
let myArray = [1, 2, 3, 4, 5];
let otherArray = [10, 20, 30, 40];
console.log(multiply(myArray, 5));
console.log(multiply(otherArray, 2));
