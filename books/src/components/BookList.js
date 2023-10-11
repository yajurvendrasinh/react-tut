// import { useContext } from 'react';
// import BooksContext from '../context/books';
import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books.context';


// function BookList({ books, onDelete, onEdit }) {
function BookList() {
    // const {count , incrementCount} = useContext(BooksContext)// from BookContext !!
    // const { books } = useContext(BooksContext);
    const { books } = useBooksContext();
    
    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />
        // return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>
    })
    return <div className='book-list'>
        {/* {count}
        <button onClick={incrementCount}>Count</button> */}
        {renderBooks}
        </div>
}

export default BookList;

/**
 * section 6,7,8 are amazing to re learn
 */