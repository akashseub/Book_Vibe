import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className='text-center mt-12'>
            <h1 className='text-3xl font-bold'>Books: {books.length}</h1>


            {
                books.map(book => <Book book={book} key={book.bookId}></Book>)
            }


        </div>
    );
};

export default Books;