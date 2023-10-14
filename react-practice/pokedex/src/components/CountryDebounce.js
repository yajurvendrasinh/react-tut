import { useState, useEffect } from 'react';

function CountryDebounce() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchData = setTimeout(() => {
      fetch(
        `https://algochurn-server.onrender.com/practice/countries/${country}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw Error('response not found');
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
    return () => clearTimeout(fetchData);
  }, [country]);

  const handleOnchange = (e) => {
    let countrySearched = e.target.value;
    setCountry(countrySearched);
  };

  return (
    <div>
      <h2>Add country name</h2>
      <input onChange={handleOnchange} />
      <div>{country}</div>
    </div>
  );
}

export default CountryDebounce;
