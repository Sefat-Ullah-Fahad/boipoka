import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {id }= useParams()
    const bookId = parseInt(id)
    

    const data = useLoaderData()
    

    const singleBook = data.find(book => book.bookId === bookId)
    console.log(singleBook)


    return (
        <div>
            <h1>Books Details</h1>
        </div>
    );
};

export default BookDetails;