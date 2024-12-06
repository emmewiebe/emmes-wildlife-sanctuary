import React from "react";

function Header() {
  return (
    <header className="bg-green-700 text-white py-6">
      <h1 className="text-4xl font-bold text-center">Emme's Wildlife Sanctuary!</h1>
      <p className="text-center text-lg mt-2">
        Your donations help protect endangered species and wildlife habitats.
      </p>
      <p className="text-center text-lg mt-2">Each "Adoption Purchase" goes directly to helping that endangered species.</p>
    </header>
  );
}

export default Header;