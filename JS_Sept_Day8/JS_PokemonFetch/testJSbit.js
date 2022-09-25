function makeLine(pokemon) {
  const output = `<p>${pokemon.name}</p>`;
  return output;
}

function enterList(pokemon) {
  const outputBox = document.querySelector("#outputBox");

  for (let i = 0; i < pokemon.length; i++) {
    const output = makeLine(pokemon[i]);

    console.log(output);
    outputBox.innerHTML += output;
  }
}
fetch("./tenPoke.json").then(function (response) {
  response.json().then(function (result) {
    enterList(result);
  });
});
