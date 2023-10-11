import axios from 'axios';
import { createContext, useState, useEffect, useCallback } from 'react';

const BooksContext = createContext();

function Provider ({ children }) { // Providers gets called with prop - children
    // const [count, setCount] = useState(5);
    // const valueToShare = {
    //     count,
    //     incrementCount : () => {
    //         setCount(count + 1)
    //     }
    // };

    const [books, setBooks] = useState([]);
    /** EVENT HANDLERS
     * createBook
     * editBook
     * deleteBook
     * all this modify the state of book array
     */
    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }, []);

    const createBook = async ( title ) => {
        const response = await axios.post('http://localhost:3001/books', { title });
        // console.log(response);
        // fetchBooks();
        // const updatedBooks = [...books, {id: Math.floor(Math.random() * 993), title}]
        // setBooks(updatedBooks);
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
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
    /** refactored valuetoshare constant */
    const valueToShare = {
        books,
        deleteBookById,
        editBook,
        fetchBooks,
        createBook
    }

    return (
        // <BooksContext.Provider value={valueToShare}>
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export {Provider};
export default BooksContext;

/** 
 * HOW TO IMPORT:
 * import BooksContext, { Provider } from ...
 */