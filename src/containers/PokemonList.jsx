import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from '../components/PokemonCard'
import PokemonInfo from '../components/PokemonInfo'

const PokemonList = () => {
  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [pokeInfo, setPokeInfo] = useState()
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()

  const fetchPokemon = async () => {
    const res = await axios.get(url)
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    await getPokemon(res.data.results)
    setLoading(false)
  }

  const getPokemon = async (res) => {
    const pokemonData = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url)
        return result.data
      })
    )
    setPokeData(pokemonData);
  }

  useEffect(() => {
    fetchPokemon()
  }, [url])

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="w-1/2 p-4">
        <PokemonCard
          pokemon={pokeData}
          loading={loading}
          infoPokemon={(poke) => setPokeInfo(poke)}/>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => {
              setPokeData([])
              setUrl(prevUrl)
            }}
            disabled={!prevUrl}
            className={`px-4 py-2 rounded-lg ${
              prevUrl ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
            } text-white`}>
            Previous
          </button>
          <button
            onClick={() => {
              setPokeData([])
              setUrl(nextUrl)
            }}
            disabled={!nextUrl}
            className={`px-4 py-2 rounded-lg ${
              nextUrl ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
            } text-white`}>
            Next
          </button>
        </div>
      </div>
      <div className="w-1/2 p-4">
        <PokemonInfo data={pokeInfo} />
      </div>
    </div>
  )
}
export default PokemonList
