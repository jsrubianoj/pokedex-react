import React, { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import { FavoriteProvider } from "./contexts/favoritesContext";

const localStorageKey='favorite_pokemon'


export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page,setPage]=useState(0)
  const [total,setTotal]=useState(0)
  const [loading,setLoading]=useState(true)
  const [favorites,setFavorites]=useState([])
  const [notFound,setNotFound]=useState(false)
  const [searching,setSearching]=useState(false)

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(15,15*page);
      //promises is an array with the promises 🔽
      const promises= data.results.map(async (pokemon)=>{
        return await getPokemonData(pokemon.url)
      })         
      //Promise.all reads the promises array 🔽          
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count/15))
      setNotFound(false)
    } catch (err) {}
  };

  const loadFavoritePokemons=()=>{
    const pokemons=JSON.parse(window.localStorage.getItem(localStorageKey))||[]
    setFavorites(pokemons)
  }

  useEffect(()=>{
    loadFavoritePokemons()
  },[])
 
  useEffect(() => {
    if(searching){
    fetchPokemons();}
  }, [page]);

  const updateFavoritePokemons=(name)=>{
    const updated=[...favorites]
    const isFavorite=favorites.indexOf(name)
    if(isFavorite>=0){
      updated.splice(isFavorite,1)
    } else{
      updated.push(name)
    }
    setFavorites(updated)
    window.localStorage.setItem(localStorageKey,
      JSON.stringify(updated))
  }

  const onSearch= async(pokemon)=>{
    setLoading(true)
    setNotFound(false)
    setSearching(true|)
    const result=await searchPokemon(pokemon)
    if(!result){
      setNotFound(true)
      return
    }else{
      setPokemons([result])
      setNotFound(false)
      setPage(0)  
      setTotal(1)  }
    setLoading(false)
    setSearching(false)
  }

  return (
    <FavoriteProvider 
    value={{favoritePokemons:favorites,
            updateFavoritePokemons:updateFavoritePokemons}} >
    <div>
      <Navbar/>
      <div className="App">
        <Searchbar onSearch={onSearch}/>
        {notFound?(
        <div className='not-found-text'>No se encontró el pokemon</div>
        ):(
        <Pokedex 
          loading={loading}
          pokemons={pokemons} 
          page={page}
          setPage={setPage}
          total={total}
        />)}
      </div>
    </div>
    </FavoriteProvider>
  );
}
