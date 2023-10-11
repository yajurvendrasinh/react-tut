import { useState, useEffect } from 'react';
import ColorQueue from './components/ColorQueue';
import CounterOptimized from './components/CounterOptimized';
import './styles/styles.css';
import Colorform from './components/Colorform';
import PokemonCard from './components/PokemonCard';

function App() {
  // const items = ['a', 'b', 'c', 'd'];
  // const [swatchOne, selectSwatchOne] = useState([]);
  // const [swatchTwo, selectSwatchTwo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState(null);

  const swatchQueueOne = ['gray', 'brown', 'gold'];
  const swatchQueueTwo = ['red', 'blue', 'green'];
  const swatchQueueThree = ['pink', 'gray', 'purple'];

  // const selectSwatch = (color, id) => {
  //   console.log(color, id);
  // };

  // const colorBlocks = (swatches, id) => {
  //   return swatches.map((color) => {
  //     return (
  //       <ColorQueue
  //         selectSwatch={() => selectSwatch(color)}
  //         color={color}
  //         id={1}
  //       />
  //     );
  //   });
  // };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => {
        console.log('Go Response', response);
        if (response.ok) {
          return response.json();
        } else {
          throw Error('failed fetching response');
        }
      })
      .then((data) => {
        console.log('pokemon data:', data);
        setPokemonData(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('Damn error');
      });
  }, []);

  let pokeCards;

  if (pokemonData !== null) {
    pokeCards = pokemonData.map((pokemon) => {
      let pokemonName = pokemon.name;
      let pokemonDataUrl = pokemon.url;
      return (
        <PokemonCard
          pokemonName={pokemonName}
          pokemonDataUrl={pokemonDataUrl}
        />
      );
    });
  }

  return (
    <div>
      {/* <CounterOptimized /> */}
      {/* <Colorform /> */}
      {/* <section className='row'>
        <div className='container'>{colorBlocks(swatchQueueOne, '1')}</div>
      </section> */}
      <section className='row'>
        {isLoading && <h6>Gotta Catch Em All....</h6>}
        {/* <PokemonCard
          image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
          name='bulbasaur'
          number={1}
        /> */}
        {pokemonData && pokeCards}
      </section>
    </div>
  );
}

export default App;
