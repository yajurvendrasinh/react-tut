import { useState, useEffect } from 'react';
import Carousal from './CarousalComponent/Carousal';

function App() {
  const [imageData, setImageData] = useState([]);
  const [country, setCountry] = useState();
  const [capital, setCapital] = useState();
  const [colorMap, setColorMap] = useState('');

  const ButtonState = 'DEFAULT' | 'SELECTED' | 'WRONG';
  const blue = 'blue';
  const red = 'red';

  const countryCapital = [
    { 'country-one': 'capital-one', 'country-two': 'capital-two' },
  ];

  let countryList = Object.keys(...countryCapital);
  let capitalList = Object.values(...countryCapital);

  const handleSelect = (data) => {
    console.log(data);
    // console.log(e.target.value === data);
    setColorMap({ ...colorMap, [data]: 'SELECTED' });
    console.log(colorMap);
  };

  let renderList = [...countryList, ...capitalList].map((data, index) => {
    return (
      <button
        className={colorMap[data] === 'SELECTED' ? 'selected' : ''}
        key={index}
        onClick={() => handleSelect(data)}
      >
        {data}
      </button>
    );
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error;
        }
      })
      .then((imageData) => {
        setImageData(imageData);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <div>{renderList}</div>
    // <div
    //   style={{
    //     maxWidth: '600px',
    //     width: '100%',
    //     height: '600px',
    //     margin: '0 auto ',
    //   }}
    // >
    //   <Carousal imageData={imageData} />
    // </div>
  );
}

export default App;
