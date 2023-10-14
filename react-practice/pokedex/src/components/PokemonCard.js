import { useState, useEffect } from 'react';

function PokemonCard({ pokemonName, pokemonDataUrl }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(pokemonDataUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error;
        }
      })
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.log('api fetch failed', error);
      });
  }, [pokemonData]);

  let pokeImageSrc;
  let pokemonAbilities;

  if (pokemonData) {
    pokeImageSrc = pokemonData.sprites.other.dream_world.front_default;
    pokemonAbilities = pokemonData.abilities.map((ability) => {
      return <li>{ability['ability']['name']}</li>;
    });
  }

  return (
    <div>
      <div className='card-container'>
        <img className='img-responsive' alt={pokemonName} src={pokeImageSrc} />
        <h5>
          {/* <span>{number}</span> */}
          <span>{pokemonName}</span>
        </h5>
        <div>{pokemonAbilities}</div>
      </div>
    </div>
  );
}
export default PokemonCard;
