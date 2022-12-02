import { useEffect, useState } from "react";

// Move this fetch into a card component!

export default function chewysWorld () {
    const [chewysPlanet, setchewysPlanet] = useState([]);
useEffect(() => {
  fetch("https://swapi.dev/api/planets/14/")
    .then(function (res) {
      return res.json();
    })
    .then(function (kashyyyk) {
      // console.log(starWars);
      setchewysPlanet(kashyyyk);
    });
}, []);}
return (

)

