import { React, useState, useEffect } from "react";

import SampleCard from "./SampleCard";

export default function RickApi() {
  const [aquaRick, setNewAquaRick] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/22")
      .then(function (res) {
        return res.json();
      })
      .then(function (aqua) {
        console.log(aqua);
        setNewAquaRick(aqua);
      });
  }, []);

  return (
    <div>
      <p>
        <SampleCard
          name={aquaRick.name}
          status={aquaRick.status}
          type={aquaRick.type}
          species={aquaRick.species}
        />
      </p>
    </div>
  );
}
