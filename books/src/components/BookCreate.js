// import { useState } from 'react'; after using custom hooks i.e. useBooksContext - we wont need useContext and BooksContext to be imported
// import BooksContext from '../context/books';

import { useState, useContext } from 'react';
import useBooksContext from '../hooks/use-books.context';

// function BookCreate( { onCreate } ) { // got this prop before refactor, now it will use context after the refactor
function BookCreate() {
    const [title, setTitle] = useState('');
    // const { createBook } = useContext(BooksContext);
    const { createBook } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // because we want to prevent browser to auto submit the form its a gotcha..dumb but yes
        // onCreate(title); // this is before refactor when we used to get the prop of ONCREATE
        createBook(title);
        setTitle('') // we want to empty out the input after we added the title for fresh edit...damn nice
    }

    return (
        <div className='book-create'>
            <h3>Add A Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                {/* 
                    anytime you use an input element it needs an onchange prop and an value prop, 
                    hence you will need a state
                */}
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Submit</button>
            </form>
        </div>
    )
}

export default BookCreate;