import { React, useState, useEffect } from "react";
import SampleCard from "./SampleCard";

export default function Profile() {
  const character = [
    {
      id: 1,
      name: "Johnny Depp",
      species: "Human",
      status: "Alive",
      from: "Earth (C-500A)",
      imageUrl: "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
    },
    {
      id: 2,
      name: "Dog",
      species: "Mammal",
      status: "Hopefully alive",
      from: "Animal",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBkTuQLSX56neA_ZEQcGKi9uTPCkqSg4PuGGCIluQwg&s",
    },
  ];
  console.log(character);
  return (
    <div>
      <p>
        {character.map((person) => (
          <SampleCard
            name={person.name}
            species={person.species}
            type={person.type}
            status={person.status}
            imageUrl={person.imageUrl}
          />
        ))}
      </p>
    </div>
  );
}
