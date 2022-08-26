function tree(line) {
  let ans = "";
  for (let i = 5; i <= line; i--) {
    //console.log(i);
    for (let y = 5; y <= i; y++) {
      //console.log(i);
      //console.log(y);
    }
    //for (let x = 0; x < slope; x) {
    ans += "*";
    //}
    //ans += "*";
    console.log(ans);
  }
}
tree(5);
