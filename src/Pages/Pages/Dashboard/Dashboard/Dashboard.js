import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


import { AuthContext } from '../../../../ContextApi/AuthProvider';
import PageLoading from '../../../Shared/PageLoading/PageLoading';
import MyBooked from '../MyBooked/MyBooked';
import MyProducts from '../MyProducts/MyProducts';

const Dashboard = () => {
    
    const {user,loading} = useContext(AuthContext);
    // console.log(user);

    const {data : unverifiedProducts,refetch} = useQuery({
        queryKey : ["unverifiedProducts"],
        queryFn : ()=>axios.get("http://localhost:5000/unverified").then(res=>{
            // console.log(res.data);
            return res.data;
        }).catch(e =>{
            console.log(e);
        })
    })


    const handleVerified =(id)=>{
        // console.log(id);
        axios.patch(`http://localhost:5000/verified/${id}`).then(res => {
            console.log(res.data);
            if(res.data.modifiedCount >0){
                toast.success("Verified")
                refetch()
            }
        }).catch(e =>{
            console.log(e);
        })
    }
    const handleDelete =(id)=>{
        // console.log(id);
        const confirm = window.confirm("Are you 'Delete' this product ? remember one think if delete this product can not undo")
        axios.delete(`http://localhost:5000/products/${id}`).then(res => {
            console.log(res.data);
            refetch()
            if(res.data.deletedCount > 0){
                toast.success("Deleted")
            }
        }).catch(e =>{
            console.log(e);
        })
    }

    if(loading){
        return <PageLoading></PageLoading>
    }
    return (
        <div className="mx-5 ">
            {
                user?.userRole === "admin" && <>
                
        <h1 className="text-3xl my-5 font-bold text-primary ">Unverified Products</h1>
        <div>
          <div className="w-full shadow-md sm:rounded-lg overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  {/* <th scope="col" className="py-3 px-6">
                    Picture
                  </th> */}
                  <th scope="col" className="py-3 px-6">
                    Product Name
                  </th>
                  {/* <th scope="col" className="py-3 px-6">
                    Seller Name
                  </th> */}
                  <th scope="col" className="py-3 px-6">
                    Seller Email
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
                {unverifiedProducts &&
                  unverifiedProducts.map((product) => (
                    <tr key={product._id} className="bg-white border-b  ">
                      {/* <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                      >
                        <div className="mask mask-square w-12 h-12">
                          <img
                            src={product?.picture}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </th> */}
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {product?.productName}
                      </th>
                      {/* <td className="py-4 px-6"> {product?.name}</td> */}
                      <td className="py-4 px-6"> {product?.email}</td>
                      <td className="py-4 px-6">{product?.productCategory}</td>
                      <td className="py-4 px-6">{product?.productPrice} .Tk</td>
                      <td className="flex">
                        {
                          product?.verified ? "Verified" :<button onClick={()=>handleVerified(product._id)} className="btn btn-sm btn-primary">
                          Verify
                        </button>
                        }
                        <button onClick={()=>handleDelete(product._id)} className='btn btn-sm btn-error ml-2'>Delete</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        </>}

        {
            user?.userRole === "buyer" && <MyBooked></MyBooked>
        }
        {
            user?.userRole === "seller" && <MyProducts></MyProducts>
        }

      </div>
    );
};

export default Dashboard;