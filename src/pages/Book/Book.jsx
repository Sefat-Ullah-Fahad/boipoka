import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";


const Book = ({ singleBook }) => {
  // const data = use(bookPromise)
  // console.log(data)
 
  const {bookName, publisher, image, rating, category, tags, yearOfPublishing } = singleBook
  console.log(singleBook)

  return (
   
    
    <Link to={`booksDetail/${singleBook.bookId}`}>
     <div className="card bg-base-100 shadow-sm border border-gray-300 p-3 ">
      <figure className="p-4 bg-gray-200 w-2/3 mx-auto">
        <img
        className="rounded h-[166px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">

   <div className="flex gap-2">
     {
        tags.map(tag => <button className="btn text-[rgba(35,190,10,1)]" >{tag}</button>)
    }
   </div>

        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p>By: {publisher}</p>

        <div className="border border-dashed border-gray-300"></div>

        <div className="flex justify-between">
          <div className="badge">{category}</div>
          <div className="badge">{rating}<FaStarHalfAlt /></div>
        </div>
      </div>
    </div>
    </Link>


  );
};

export default Book;
