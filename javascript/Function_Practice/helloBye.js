let sum = " ";
for (let i = 1; i < 20; i++) {
  sum = "Hello!! " + i;
  if (i % 2 === 0) {
    sum = "Bye! ";
  }
  console.log(sum);
}
