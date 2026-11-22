import React, {useContext} from "react";
import FavoritesContext from '../../contexts/favoritesContext'

const Pokemon = (props) => {
  const { pokemon } = props;
  const {favoritePokemons, updateFavoritePokemons}=useContext(FavoritesContext)

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart=favoritePokemons.includes(pokemon.name)?redHeart:blackHeart

  const clickHeart=(e)=>{
    e.preventDefault()
    updateFavoritePokemons(pokemon.name)
  }
  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          className="pokemon-img"
          src={pokemon.sprites?.front_default || pokemon.sprites?.other?.["official-artwork"]?.front_default || ""}
          alt={pokemon.name}
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div># {pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="card-type">
            {pokemon.types?.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button className="pokemon-heart-btn" onClick={clickHeart} aria-label="Favorito">
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
