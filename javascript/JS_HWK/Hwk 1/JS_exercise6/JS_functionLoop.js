let n = 0;
function loop(a, b) {
  for (i = 1; i <= a; i++) {
    n += i + b;
    console.log(n);
  }
  return n;
}
let nNum = loop(5, "+");
console.log(nNum);
