//ignore if it is upper or lower case
function in_Str(array, value) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element.toUpperCase() === value.toUpperCase()) {
      // if(array[i].toLowerCase()=== value.toLowerCase())
      return true;
    }
  }
  return "_";
}

console.log(in_Str("bOaT", "O"));
