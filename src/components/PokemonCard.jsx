import React, { useState } from 'react';

const PokemonCard = ({ pokemon, loading, infoPokemon }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('pokemonFavorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addToFavorites = (poke) => {
    if (!favorites.some((favorite) => favorite.id === poke.id)) {
      const updatedFavorites = [...favorites, poke];
      setFavorites(updatedFavorites);
      localStorage.setItem('pokemonFavorites', JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorites = (poke) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== poke.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('pokemonFavorites', JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return <div className="text-center text-gray-600 font-semibold">Loading...</div>;
  }

  return (
    <div className="pokemon-card grid grid-cols-2 gap-4">
      {pokemon.map((poke) => (
        <div key={poke.id} className="pokemon border rounded-lg p-4 hover:bg-gray-100 cursor-pointer">
          <img
            src={poke.sprites.front_default}
            alt={poke.name}
            onClick={() => infoPokemon(poke)}
            className="mx-auto w-24 h-24"
          />
          <p className="text-center mt-2 text-gray-800 font-semibold">{poke.name}</p>
          {favorites.some((favorite) => favorite.id === poke.id) ? (
            <button onClick={() => removeFromFavorites(poke)} className="mt-2 bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-600 focus:outline-none">
              Remove from Favorites
            </button>
          ) : (
            <button onClick={() => addToFavorites(poke)} className="mt-2 bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 focus:outline-none">
              Add to Favorites
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PokemonCard;
