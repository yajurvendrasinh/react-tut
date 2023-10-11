import { useState } from 'react'; 
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App () {

    const [imageArray, setImageArray] = useState([]);

    const handleSearch = async (searchTerm) => {
        const result = await searchImages(searchTerm);
        setImageArray(result);
    }
    return (
        <div>
            <h1>Pics App</h1>
            <section>
                <SearchBar onSubmit={handleSearch}/>
            </section>
            <section>
                <ImageList imageArray={imageArray}/>
            </section>
        </div>
    )
}

export default App;