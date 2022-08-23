// define sum to add the end answer to each other
let myArrays = [24, 30, 25, 2, 1, 39, 44];
let sum = 0;

for (let i = 0; i < myArrays.lenght; i++) {
  if (myArrays[i] % 2 === 0) {
    sum += myArrays[i];
  }
}
console.log(sum + " of even number");
//console.log(number);
console.log(myArrays);
//original
/*let evenNum = myArrays[i] ;
    sum += evenNum;*/
