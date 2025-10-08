import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

  import { ToastContainer, toast } from 'react-toastify';



const BookDetails = () => {

    const {id }= useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId === bookId)
    const {bookName, image, } = singleBook


    const handleMarksAsRead = id => {
        // Store with Id
        // Where to Store
        // array or collection
        // if book already exist the show a alart
        // if book not exist then push in tha collection or array

//         MySwal.fire({
//   title: <p>Hello World</p>,
//   didOpen: () => {
//     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
//     MySwal.showLoading()
//   },
// }).then(() => {
//   return MySwal.fire(<p>Shorthand works too</p>)
// })


         toast("Wow so easy!");
        addToStoredDB(id)
    }





    return (
        <div className='flex w-2/3 mx-auto border my-9'>

                <img className='w-48' src={image} alt="" />
             
            

            <div className='m-2.5'>
                 <h5>{bookName}</h5>
                 <ToastContainer />
                <button onClick={()=> handleMarksAsRead(id)} className="btn btn-outline ">Mar to Read</button>
                <button className="btn btn-active btn-info m-2.5">Add to WishList</button>
            </div>
        </div>
    );
};

export default BookDetails;