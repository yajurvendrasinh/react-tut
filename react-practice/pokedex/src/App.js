import { useState, useEffect } from 'react';
import ColorQueue from './components/ColorQueue';
import CounterOptimized from './components/CounterOptimized';
import './styles/base.css';
import Colorform from './components/Colorform';
import PokemonCard from './components/PokemonCard';

function App() {
  // const items = ['a', 'b', 'c', 'd'];
  // const [swatchOne, selectSwatchOne] = useState([]);
  // const [swatchTwo, selectSwatchTwo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5'
  );
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

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
    fetch(currentPage)
      .then((response) => {
        if (response.ok) {
          setIsLoading(false);
          return response.json();
        } else {
          throw Error('failed fetching response');
        }
      })
      .then((data) => {
        console.log('Next', data.next);
        console.log('Prev', data.previous);
        setNextPage(data.next);
        setPrevPage(data.previous);
        setPokemonData(data.results);
      })
      .catch((error) => {
        console.log('Damn error', error);
      });
  }, [currentPage]);

  let pokeCards;

  if (pokemonData !== null) {
    pokeCards = pokemonData.map((pokemon) => {
      let pokemonName = pokemon.name;
      let pokemonDataUrl = pokemon.url;
      return (
        <PokemonCard
          key={pokemonName}
          pokemonName={pokemonName}
          pokemonDataUrl={pokemonDataUrl}
        />
      );
    });
  }

  const pokemonDataFunc = () => {
    return pokemonData.map((pokemon) => {
      let pokemonName = pokemon.name;
      let pokemonDataUrl = pokemon.url;
      return (
        <PokemonCard
          pokemonName={pokemonName}
          pokemonDataUrl={pokemonDataUrl}
        />
      );
    });
  };

  const showNextPage = () => {
    setCurrentPage(nextPage);
  };
  const showPrevPage = () => {
    setCurrentPage(prevPage);
  };

  return (
    <div>
      {/* <CounterOptimized /> */}
      {/* <Colorform /> */}
      {/* <section className='row'>
        <div className='container'>{colorBlocks(swatchQueueOne, '1')}</div>
      </section> */}
      <section className='column'>
        <section className='row'>
          {!pokemonData && <h6>Gotta Catch Em All....</h6>}
          {pokemonData && pokemonDataFunc()}
        </section>
        <section className='row'>
          {prevPage && <button onClick={showPrevPage}>Previous</button>}
          {nextPage && <button onClick={showNextPage}>Next</button>}
        </section>
      </section>
    </div>
  );
}

export default App;
