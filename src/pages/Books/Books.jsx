import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    const [allBooks, setAllBooks] = useState([])


    // *************** Data loading system .1
    // useEffect( () => {
    //     fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // }, [])

    // **************** Data loading system .2
    // const bookPromise = fetch('./booksData.json').then(res => res.json())

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Hello ami bools</h1>
            <Suspense fallback={<span>Books Data in Camming.....</span>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                    {
                        data.map(singleBook => <Book key={singleBook.bookId} singleBook = {singleBook}></Book>)
                    }
            </div>
            </Suspense>
        </div>
    );
};

export default Books;