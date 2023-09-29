import React from "react";

function PokemonInfo({ data }) {
  if (!data) {
    return null;
  }

  const abilitiesList = data.abilities.map((poke) => (
    <div key={poke.ability.name} className="group">
      <h2 className="text-lg font-semibold text-blue-500">{poke.ability.name}</h2>
    </div>
  ));

  const statsList = data.stats.map((poke) => (
    <h3 key={poke.stat.name} className="text-gray-700">
      {poke.stat.name}: {poke.base_stat}
    </h3>
  ));

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{data.name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
        alt={data.name}
        className="w-24 h-24 mx-auto mb-4"
      />
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Abilities</h2>
        <div className="space-y-2">{abilitiesList}</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-700">Base Stats</h2>
        <div className="space-y-1">{statsList}</div>
      </div>
    </div>
  );
}

export default PokemonInfo;
