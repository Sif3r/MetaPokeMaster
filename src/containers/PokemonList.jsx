import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const PokemonList = () => {
  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [prevUrl, setPrevUrl] = useState();
  const [nextUrl, setNextUrl] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiUrl);
        const { results, previous, next } = res.data;
        setPokemonList(results);
        setPrevUrl(previous);
        setNextUrl(next);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  const handleNavigationClick = (newUrl) => {
    if (newUrl) {
      setApiUrl(newUrl);
    }
  };

  if (loading) {
    return <div className="p-4 m-2 bg-gray-200 rounded shadow">Loading...</div>;
  }

  return (
    <>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <PokemonCard pokemonUrl={pokemon.url} />
          </li>
        ))}
      </ul>
      <div class="inline-flex ">
        <button
          className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
          onClick={() => handleNavigationClick(prevUrl)}
          disabled={!prevUrl}>
          Prev
        </button>
        <button
          className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
          onClick={() => handleNavigationClick(nextUrl)}
          disabled={!nextUrl}>
          Next
        </button>
      </div>
    </>
  );
};

export default PokemonList;
