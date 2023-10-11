import { useEffect, useState } from 'react';

function Pokeapi () {

    const [responseData, setResponseData] = useState(null);
    const [loadingState, setLoadingState] = useState(true);
    const [errorState, setErrorState] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        .then((response) => {
            // console.log(response)
            if(response.ok) {
                return response.json();
            }
            throw response;
        })
        .then((data) => {
            setResponseData(data);
        })
        .catch((error) => {
            console.log('show error', error);
            setErrorState(true);
        })
        .finally(() => {
            setLoadingState(false);
        })
    }, []);

    if(loadingState) return 'Gotta catch em all....';
    if(errorState) return 'pokedex error...';



    /** 
     * Fetch pokemon details from the following API.
     * https://pokeapi.co/api/v2/pokemon/pikachu
     * 
     *  
     * */ 
    return (
        <div>
            Pokemon
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
    )
}

export default Pokeapi;