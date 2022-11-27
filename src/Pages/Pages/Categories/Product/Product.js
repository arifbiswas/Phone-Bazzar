import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {  useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../ContextApi/AuthProvider';
import PageLoading from '../../../Shared/PageLoading/PageLoading';
import BookedModal from './BookedModal';
import verified from '../../../../Assets/verified1.png'


const Product = () => {
  const {user ,loading ,setLoading} = useContext(AuthContext);
  const navigate = useNavigate();
    const product = useLoaderData()
    const {register , handleSubmit , reset} = useForm()
    // console.log(user);
    const handleBuyProducts = (booked) =>{
      booked.picture = product.picture;
      booked.productCategory = product.productCategory;
      booked.productId = product._id;
      booked.email = product.email;

      console.log(booked);
      setLoading(true)

      axios.post("http://localhost:5000/booked",booked).then(res =>{
        if(res.data.acknowledged){
          setLoading(false)
          toast.success("booked Successfully")
          // navigate("/dashboard/myOrders")
          
        }
        
      }).catch(e =>{
        console.log(e);
      })
      
    }

    // console.log(user);

    const handleWishList =(wishProduct)=>{
      setLoading(true)
      // console.log(wishProduct);

      const wish ={
        buyerEmail : user?.email,
        buyerName : user?.displayName,
        buyerPicture : user?.photoURL,
        picture : wishProduct.picture,
        productName : wishProduct.productName,
        productCategory : wishProduct.productCategory,
        email : wishProduct.email,
        products_id : wishProduct._id,
        productPrice : wishProduct.productPrice

      }

      axios.post("http://localhost:5000/carts",wish).then(res =>{
        if(res.data.acknowledged){
          setLoading(false)
          toast.success("Add Wishlist")
          
        }
        
      }).catch(e =>{
        console.log(e);
      })
    }


    if(loading){
      return <PageLoading></PageLoading>
    }

    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full h-full lg:h-[38rem]  rounded" src={product?.picture}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <div className='flex justify-between'>
        <h2 className="text-sm title-font text-primary tracking-widest">{product?.productCategory}</h2>
        <h2 className="text-sm title-font text-primary tracking-widest"><small>Sale by : {product?.name}</small></h2>
        </div>
         <small className='text-gray-400'><i>Post date : {product?.postDateInfo?.postDay} {product?.postDateInfo?.postTime} </i></small> 
         <div className=''>
         
          <div className='text-gray-400 flex items-center'>Verification : .{product?.verified ?<div className='flex items-center'> <h1> verified</h1> <img src={verified} className="w-12" alt="" /></div> : "Unverified"}
          </div>
          
        
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
          {
            user.userRole !== "seller" && user.userRole !== "admin" && <>
             {/* The button to booked-modal */}
            <label 
            htmlFor="booked-modal"
          className="btn btn-primary flex ml-auto text-white  border-0 py-2 px-6  rounded">Booked new one</label>
          <button
          onClick={()=>handleWishList(product)}
          className="btn btn-primary rounded-full w-12 h-10 p-0 border-0 inline-flex items-center justify-center  ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
            </>
          }
        </div>
      </div>
    </div>
  </div>
  <BookedModal
  handleBuyProducts={handleBuyProducts}
  handleSubmit={handleSubmit}
  register={register}
  product={product}
  user={user}
  ></BookedModal>
</section>
        </div>
    );
};

export default Product;