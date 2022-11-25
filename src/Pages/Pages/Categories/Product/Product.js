import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {

    const product = useLoaderData()
    console.log(product);

    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product?.picture}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <div className='flex justify-between'>
        <h2 className="text-sm title-font text-primary tracking-widest">{product?.productCategory}</h2>
        <h2 className="text-sm title-font text-primary tracking-widest"><small>Author : {product?.name}</small></h2>
        </div>
         <small className='text-gray-400'><i>Post date : {product?.postDateInfo?.postDay} {product?.postDateInfo?.postTime} </i></small> 
         <div className='my-5'>

         <h1 className="text-primary text-3xl title-font font-medium mb-1">{product?.productName}</h1>
       
       <p className="leading-relaxed">{product?.description}</p>
       <div className="flex flex-col mt-6  pb-5 border-b-2 border-gray-100 mb-5">
       <h2 className="text-sm title-font text-primary tracking-widest">Quality : <span className='text-1xl text-black'>{product?.quality}</span></h2>
       <h2 className="text-sm title-font text-primary tracking-widest">Contact Number : <span className='text-1xl text-black'>{product?.number}</span></h2>
       <h2 className="text-sm title-font text-primary tracking-widest">Location : <span className='text-1xl text-black'>{product?.location}</span></h2>
        </div>

         </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${product?.productPrice}</span>
          <button className="btn btn-primary flex ml-auto text-white  border-0 py-2 px-6  rounded">Go Booking</button>
          <button className="rounded-full w-10 h-10 bg-cyan-200 p-0 border-0 inline-flex items-center justify-center text-primary ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Product;