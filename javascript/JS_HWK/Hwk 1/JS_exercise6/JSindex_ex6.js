let userNum = 5;
let n = 0;
let y = 0;
for (let i = 1; i <= userNum; i++) {
  y = y + " + " + i;
  n += i;
  console.log(n);
}
console.log(y + " capturing variable i is adding up.");
console.log(n + " is the sum of 1 +2 +3 +4 +5");
