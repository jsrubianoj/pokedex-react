export const searchPokemon = async (pokemon) => {
  try {
    if (!pokemon) return null;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toString().toLowerCase().trim()}`;
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
};

export const getPokemons = async (limit = 15, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
};
