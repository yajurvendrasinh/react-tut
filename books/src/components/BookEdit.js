// import { useState, useContext } from 'react';
// import BooksContext from '../context/books';
import { useState } from 'react';
import useBooksContext from '../hooks/use-books.context';


function BookEdit( { book, onSubmit } ) {
    const [title, setTitle] = useState(book.title);
    // const { editBook } = useContext(BooksContext);
    const { editBook } = useBooksContext();

    const handleInputChange = (event) => {
        setTitle(event.target.value)
    }

    const handleFormChange = (event) => {
        event.preventDefault();
        // onSubmit(title, book.id);
        onSubmit();
        editBook(title, book.id);
    }
    return (
        <div>
            <form className="book-edit" onSubmit={handleFormChange}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleInputChange}/>
                {/* whenever you use <input/> we always track its value in the state...always */}
                <button className="button is-primary">
                    Save
                </button>
            </form>
        </div>
    )
}

export default BookEdit;