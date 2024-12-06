import React from "react";
import PetCard from "./PetCard";

function PetList({ pets, handleFavClick, favs }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
          handleFavClick={handleFavClick}
          isFav={favs.includes(pet.id)}
        />
      ))}
    </div>
  );
}

export default PetList;