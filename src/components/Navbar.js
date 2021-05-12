import React from "react";


const Navbar = () => {

  let imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png";

  return (
    <nav>
      <div>
        <h1>Buscador de pokemon</h1>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
    </nav>
  );
};

export default Navbar;
