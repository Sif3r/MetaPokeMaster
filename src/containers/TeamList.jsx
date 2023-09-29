import React, { useState, useEffect } from 'react';
import PokemonInfo from '../components/PokemonInfo';

const TeamList = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('pokemonFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFavorite = (pokemonToRemove) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== pokemonToRemove.id
    );

    setFavorites(updatedFavorites);
    localStorage.setItem('pokemonFavorites', JSON.stringify(updatedFavorites));
  };

  const pokeInfo = (poke) => {
    setSelectedPokemon(poke)
  }

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My team</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((favorite) => (
          <li key={favorite.id} className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src={favorite.sprites.front_default}
              alt={favorite.name}
              className="w-24 h-24 mx-auto mb-2"/>
            <p className="text-center text-xl font-semibold">{favorite.name}</p>
            <button
              onClick={() => removeFavorite(favorite)}
              className="mt-2 bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-600 focus:outline-none">
              Remove
            </button>
            <button onClick={() => pokeInfo(favorite)}
              className="mt-2 bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-red-600 focus:outline-none">
            Info</button>
          </li>
        ))}
      </ul>
      {selectedPokemon && <PokemonInfo data={selectedPokemon} />}
    </div>
  );
};

export default  TeamList
