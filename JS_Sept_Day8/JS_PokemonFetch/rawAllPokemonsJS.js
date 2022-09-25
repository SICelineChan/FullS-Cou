function enterList(pokemon) {
  const outputBox = document.querySelector("#outputBox");
  for (let i = 1; i < pokemon.length; i++) {
    const output = i + " : " + pokemon[i].name;
    outputBox.innerHTML += "<br></br> " + output;
  }
}
fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(function (
  response
) {
  response.json().then(function (result) {
    let allPoke = result.results;
    enterList(allPoke);
  });
});

//raw data for 10 pokemons!!!!10 Only
//https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
// raw data for 1000+ pokemon
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
