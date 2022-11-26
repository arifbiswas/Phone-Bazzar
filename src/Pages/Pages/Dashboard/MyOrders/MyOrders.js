import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../ContextApi/AuthProvider';
import PageLoading from '../../../Shared/PageLoading/PageLoading';

const MyOrders = () => {
    const {user, loading} = useContext(AuthContext);
    const [orders , setOrders] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/orders?email=${user?.email}`).then(res =>{
            // console.log(res.data);
            setOrders(res.data)
        }).catch(e => console.log(e))
    },[user?.email])
    // http://localhost:5000/orders?email=nosi@gmail.com

    if(loading){
        return <PageLoading></PageLoading>
    }
    
    return (
        <div className='mx-5 '>
            <h1 className='text-3xl my-5 font-bold text-primary '>My Orders</h1>
            <div>
            <label
            htmlFor="dashboard-modal"
            className="btn btn-primary  drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <div className="w-full shadow-md sm:rounded-lg">
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
                <th scope="col" className="py-3 px-6">
                    Price 
                </th>
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                orders && orders.map(order => 
                    <tr key={order._id} className="bg-white border-b  ">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                <div className="mask mask-square w-12 h-12">
                <img src={order?.picture} alt="Avatar Tailwind CSS Component" />
              </div>
                </th>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                    {order?.productName}
                </th>
                <td className="py-4 px-6">
                {order?.productCategory}
                </td>
                <td className="py-4 px-6">
                {order?.productPrice} .Tk
                </td>
                <td className="py-4 px-6">
                   <Link to="/checkout" className='btn btn-sm btn-primary'>Pay</Link>
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

export default MyOrders;