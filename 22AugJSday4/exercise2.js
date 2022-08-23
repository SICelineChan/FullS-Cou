//E2 the sum of the first and last digit
/*let array = [1, 2, 3, 4, 5];

console.log(array[0] + array[array.length - 1]); */

// E3;
array = [1, 2, 3, 4, 5, 6];
let output = " ";

for (let i = array.length - 1; i >= 0; i--) {
  output += array[i] + " ";
}
console.log(output + " Sum of exercise no 3");

//E4
array = [1, 2, 3, 4, 5, 6];
let outPut = [];

for (let i = array.length - 1; i >= 0; i--) {
  let o = array.length - 1 - i;
  outPut[o] = array[i];
}
console.log("This is using i = i - 1 and the result is " + outPut);
