import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(pokemonUrl);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, [pokemonUrl]);

  if (!pokemonData) {
    return <div className="p-4 m-2 bg-gray-200 rounded shadow">Loading...</div>;
  }

  const { name, sprites, types } = pokemonData;

  return (
    <div className="p-4 m-2 bg-white rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <img src={sprites.front_default} alt={name} className="mx-auto" />
      <div className="mt-2">
        <strong className="block mb-1">Types:</strong>
        <ul>
          {types.map((type, index) => (
            <li key={index} className="text-blue-500">
              {type.type.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
