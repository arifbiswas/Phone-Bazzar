import React from "react";

const Categories = () => {
  return (
    <div className="p-5 bg-white my-12">
        {/* <div className="flex text-primary  items-center justify-between mx-8 my-8 font-bold text-1xl">
            <h1>{"Unsold Products"}</h1>
            <button className="bg-primary text-white py-2 px-4 font-semibold rounded-md">Add Products</button>
        </div> */}
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/200/280/arch" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
