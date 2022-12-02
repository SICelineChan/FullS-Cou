//Works only on CodePen
function enterList() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(
    function (response) {
      response.json().then(function (result) {
        let allPoke = result.results;
        enterList(allPoke);
        console.log(result);
      });
    }
  );
}
enterList();
