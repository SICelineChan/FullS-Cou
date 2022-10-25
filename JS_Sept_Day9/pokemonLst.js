// console.log(pokemonList.results[0].name);
// console.log(pokemonList.results[0].url);

const pokeList = document.querySelector("#pokeList");
function fillPokeList(arrayOfPokemon) {
  let listofElement = "<ul>";
  for (let i = 0; i < arrayOfPokemon; i++) {
    // const pokemon = arrayOfPokemon[i];
    // const name = pokemon.name;
    // const url = pokemon.url;
    //the above 3 line can be shorted into object deconstructer
    const { name, url } = arrayOfPokemon[i];

    listofElement += `<li><a href="${url}">${name}</a></li>`;
  }
  listofElement += "</ul>";
  pokeList.innerHTML = listofElement;
  console.log(listofElement);
}

// fillPokeList(pokemonList.results);
function fetchList() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=40&offset=0")
    .then(function (response) {
      return response.json();
    })
    .then(function (list) {
      fillPokeList(list.results);
    })
    .catch(function (error) {
      alert(`There was an error`);
    });
}
fetchList();
