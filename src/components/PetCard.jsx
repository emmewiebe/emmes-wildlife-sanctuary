import React from "react";

function PetCard({ pet, handleFavClick, isFav }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        src={pet.image}
        alt={pet.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold mt-4">{pet.name}</h2>
      <p className="text-gray-600 italic">{pet.species}</p>
      <p className="text-gray-500 mt-2">{pet.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <button
          className={`text-sm px-4 py-2 rounded border ${
            isFav ? "bg-yellow-400 text-black" : "bg-gray-100 text-gray-800"
          }`}
          onClick={() => handleFavClick(pet.id)}
        >
          {isFav ? "★ Favorited" : "☆ Add to Favorites"}
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => alert("Adopting wild animals is not possible right now.")}
        >
          Purchase
        </button>
      </div>
    </div>
  );
}

export default PetCard;