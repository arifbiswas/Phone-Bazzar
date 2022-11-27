import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ConfirmationModal from '../../../Components/ConfirmationModal/ConfirmationModal';
import { AuthContext } from '../../../ContextApi/AuthProvider';
import PageLoading from '../../Shared/PageLoading/PageLoading';

const Cart = () => {

    const {user, loading} = useContext(AuthContext);
    const {data : carts, refetch} = useQuery({
        queryKey : ["cart",user?.email],
        queryFn : ()=> axios.get(`http://localhost:5000/carts?email=${user?.email}`).then(res =>{
                  // console.log(res.data);
                  return res.data
              }).catch(e => console.log(e))
      })

    const handleDelete = (id) =>{
        const confirm = window.confirm("Are sure that 'Delete' this product from cart ?")
        // console.log(id);
        if(confirm){
            axios.delete(`http://localhost:5000/carts/${id}`).then(res =>{
                if(res.data.deletedCount > 0){
                    // console.log(res.data)
                    toast.success("Delete From Cart")
                    refetch()
                    
                }
            }).catch(e => {
                console.log(e);
            })
        }
       
    }

    if(loading){
        return <PageLoading></PageLoading>
    }

    return (
        <div className='my-5 '>
            <h1 className='text-3xl my-5 font-bold text-primary '>My Carts</h1>
            <div>
          <div className="w-full shadow-md sm:rounded-lg overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="py-3 px-6">
                Picture
                </th>
                <th scope="col" className="py-3 px-6">
                Product Name
                </th>
                <th scope="col" className="py-3 px-6">
                      Category
                </th>
                <th scope="col" className="py-3 px-6 ">
                    Price 
                </th>
                <th scope="col" className="py-3 px-6 flex justify-center items-center">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                carts && carts.map(cart => 
                    <tr key={cart._id} className="bg-white border-b  ">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                <div className="mask mask-square w-12 h-12">
                <img src={cart?.picture} alt="Avatar Tailwind CSS Component" />
              </div>
                </th>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                    {cart?.productName}
                </th>
                <td className="py-4 px-6">
                {cart?.productCategory}
                </td>
                <td className="py-4 px-6">
                {cart?.productPrice} .Tk
                </td>
                <td className="py-4 px-6 flex justify-center items-center">
                   <Link to={`/product/${cart?.products_id}`} className='btn btn-sm btn-primary'>Book Now</Link>
                   <label
                   htmlFor="confirmation-modal"
                   onClick={()=>handleDelete(cart?._id)}
                   className='btn btn-sm btn-error ml-3'>Delete</label>
                </td>
            </tr>
                    
                    )
            }
            
            
        </tbody>
    </table>
</div>

            </div>
             
            
        </div>
    );
};

export default Cart;