let beer = 99;
for (let i = 0; i < 99; i++) {
  let beerLeft = " ";
  beerLeft = beer - i;
  //console.log(beerLeft);

  /*if ((beer = 99)) {
    console.log(beer + " of bottle of beer");
    console.log("You take one down " + beerLeft + " on the wall");
  }*/
  if (beerLeft < 100) {
    console.log(
      beerLeft +
        " bottles of beer! " +
        beerLeft +
        " bootles of beer on the wall!"
    );
    console.log();
    console.log(
      "You take one down and pass it around " + (beerLeft - 1) + " on the wall"
    );
  }
}
