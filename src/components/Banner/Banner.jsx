import React from "react";

import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className="hero bg-base-200 py-7">
        <div className="hero-content flex justify-between flex-col lg:flex-row-reverse">
          <img
            src={bookImg}
            className="max-w-sm rounded-lg shadow-2xl pl-6"
          />
          <div>
            <h1 className="text-5xl font-bold leading-16 mb-5">Books to freshen up <br />  your bookshelf</h1>
           
            <button className="btn btn-success text-white font-semibold">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
