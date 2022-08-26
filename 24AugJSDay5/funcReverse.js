/*array = [1, 2, 3, 4, 5, 6];
let outPut = [];

for (let i = array.length - 1; i >= 0; i--) {
  let o = array.length - 1 - i;
  outPut[o] = array[i];
}
console.log("This is using i = i - 1 and the result is " + outPut);*/

//Function
function reverse(myArray) {
  let output = [];
  for (let i = myArray.length - 1; i >= 0; i--) {
    output[i] = myArray[myArray.length - 1 - i];
    //for (let i = 0; i < myArray.length; i++) {
    //output[myArray.length-1 - i] = myArray[i];
  }
  return output;
}
let countUp = [1, 2, 3, 4, 5];
//console.log(countUp);
let countDown = reverse(countUp);
console.log(countDown);
