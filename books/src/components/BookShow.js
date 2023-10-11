// import { useState, useContext } from 'react';
import { useState } from 'react';
import useBooksContext from '../hooks/use-books.context';
import BookEdit from './BookEdit';
// import BooksContext from '../context/books';

// function BookShow({ book, onDelete, onEdit }) {
function BookShow({ book }) {

    const [showEdit, setShowEdit] = useState(false);
    // const { deleteBookById } = useContext(BooksContext); // added as part of refactor while using context
    const { deleteBookById } = useBooksContext();
    const deleteBook = () => { 
        // onDelete(book.id);
        deleteBookById(book.id);
    }

    const editBook = () => {
        setShowEdit(!showEdit);
    }

    // const handleSubmit = ( title, id) => {
    const handleSubmit = () => {
        // onEdit(title, id);
        // editBook()
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit}/>;
    }

    return ( 
        <div className='book-show'>
            <div>{content}</div>
            <div className='actions'>
                <button className='edit' onClick={editBook}></button>
                <button className='delete' onClick={deleteBook}>close</button>
            </div>
            
        </div> 
    )
}

export default BookShow;