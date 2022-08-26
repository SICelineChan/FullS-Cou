let arr = [2, 5, 9, 1, 7, 9];
let smallest = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log(smallest);
