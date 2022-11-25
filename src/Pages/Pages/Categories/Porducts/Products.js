import React from "react";
import { Link } from "react-router-dom";

const Products = ({product}) => {
  return (
    <div className="p-5 bg-white ">
        {/* <div className="flex text-primary  items-center justify-between mx-8 my-8 font-bold text-1xl">
            <h1>{"Unsold Products"}</h1>
            <button className="bg-primary text-white py-2 px-4 font-semibold rounded-md">Add Products</button>
        </div> */}
      <div className="flex flex-1 flex-col lg:flex-row bg-base-100 shadow-xl">
        <figure>
          <img src={product?.picture} alt={product?.productName} className="w-full h-full lg:w-80" />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title text-primary">{product?.productName}</h2>
          <p className="text-sm text-gray-500 ">Post by {product?.name} 
          {/* badge */}
          <small className="ml-3">{product?.postDateInfo?.postDay} {product?.postDateInfo?.postTime}</small><span>{}</span></p>
          <p className="text-gray-600">{product?.description.length < 200 ? product?.description : product?.description.slice(0,200) + "...." } <small className="text-primary">see more Click Detail</small></p>
          <p className="text-lg">
            Price : <span className="text-primary">{
              product?.productPrice
            }</span> Tk
          </p>
          <p className="text-lg">
            Contact Number : <span className="text-primary">{
              product?.number
            }</span> 
          </p>
          <div className="card-actions justify-start">
            <Link to={`/product/${product._id}`} className="btn btn-primary">Detail</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
