// import axios from 'axios';
import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
    // const [books, setBooks] = useState([]); MOVED TO CONTEXT according to section 8
    /** EVENT HANDLERS
     * createBook
     * editBook
     * deleteBook
     * all this modify the state of book array
     */
    // const fetchBooks = async () => { MOVED TO CONTEXT according to section 8
    //     const response = await axios.get('http://localhost:3001/books');
    //     setBooks(response.data);
    // }

    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks])
    /** 
    const createBook = async ( title ) => {
        const response = await axios.post('http://localhost:3001/books', { title });
        // console.log(response);
        // fetchBooks();
        // const updatedBooks = [...books, {id: Math.floor(Math.random() * 993), title}]
        // setBooks(updatedBooks);
    }

    const deleteBookById = async ( id ) => {
        await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBookList = books.filter((book) => {
            return book.id !== id
        })
        setBooks(updatedBookList);
    }

    const editBook = async ( newTitle, id ) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, { title: newTitle })
        
        const updatedBookTitle = books.map(( book ) => {
            if (book.id === id) {
                // return {...book, title};
                return {...book, ...response.data}
            }
            return book
        });
        setBooks(updatedBookTitle)
    }
    */ // all these moves to context file as a part of restructuring in section 8
    
    return (
        <div className='app'>
            {/* {books.length} */}
            
            {/* 
                <BookList books={books} onDelete={deleteBookById} onEdit={editBook}/>
                <BookCreate onCreate={createBook} books={books}/> 
                - once we start using context the above component will not recieve props from the APP component
                - instead they will recieve those functions as part of context from the PROVIDER in BookProvider / book.js as below
            */}

                <BookList />
                <BookCreate /> 
        </div>
    );
}

export default App;


/** CHEAT SHEETS
 * JSX NOTES : https://jsx-notes.vercel.app/
 * STATE UPDATES : https://state-updates.vercel.app/ ( array and object update strategies )
 */