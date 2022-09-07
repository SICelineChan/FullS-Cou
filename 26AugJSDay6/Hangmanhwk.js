//ignore if it is upper or lower case
function in_Str(OriginalWord, values) {
  let output = " ";
  for (let i = 0; i < OriginalWord.length; i++) {
    let element = OriginalWord[i];
    if (element.toUpperCase() === values[0].toUpperCase()) {
      output += values[0];
      // if(array[i].toLowerCase()=== value.toLowerCase())
    } else {
      output += "_";
    }
  }
  return output;
}

console.log(in_Str("bOaT", ["O"]));
