import React, { useState } from "react";
import Header from "./components/Header";
import PetList from "./components/PetList";
// PetList is the component where all the pets will be displayed.
import pets from "./data/pets.json";
// The data for all the pets is coming from this JSON file.

// 'favs' holds the list of favorite pet IDs, and 'setFavs' updates that list.
function App() {
  const [favs, setFavs] = useState([]);

  const handleFavClick = (id) => {
    // Check if the pet is already a favorite!
    if (favs.includes(id)) {
      // If it's already a favorite, remove it from the list
      setFavs(favs.filter((fav) => fav !== id));
    } else {
      // If it's not a favorite, add it to the list
      setFavs([...favs, id]);
    }
  };

  return (
    <div>
      <Header />
      
      <PetList pets={pets} handleFavClick={handleFavClick} favs={favs} />
      {/* Passing down the list of pets, the function to handle favorites, and the list of current favorites. */}
    </div> 
  );
}

export default App;
// This makes the App component available for use in other files, like the entry point of the app sort of.