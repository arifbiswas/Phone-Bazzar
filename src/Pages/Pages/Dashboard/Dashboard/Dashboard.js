import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../ContextApi/AuthProvider';
import PageLoading from '../../../Shared/PageLoading/PageLoading';
import MyBooked from '../MyBooked/MyBooked';
import MyProducts from '../MyProducts/MyProducts';

const Dashboard = () => {
    const navigate = useNavigate()
    const {user,loading} = useContext(AuthContext);
    // console.log(user);

    const {data : unverifiedUsers,refetch} = useQuery({
        queryKey : ["unverifiedUsers"],
        queryFn : ()=>axios.get("http://localhost:5000/unverified").then(res=>{
            // console.log(res.data);
            if(!res.data){
              navigate("/")
            }
            return res.data;
        }).catch(e =>{
            console.log(e);
        })
    })

    
    
    const handleVerified =(id)=>{
        // console.log(id);
        axios.patch(`http://localhost:5000/verified/${id}`).then(res => {
            console.log(res.data);
            if(res.data){
                toast.success("Verified")
                refetch()
            }
        }).catch(e =>{
            console.log(e);
        })
    }
    const handleDelete =(id)=>{

        // console.log(id);
        const confirm = window.confirm("Are you 'Delete' this User ? remember one think if you delete this User can not undo")
        if(confirm){
          axios.delete(`http://localhost:5000/users/${id}`).then(res => {
            console.log(res.data);
            refetch()
            if(res.data.deletedCount > 0){
                toast.success("Deleted")
            }
        }).catch(e =>{
            console.log(e);
        })
        }
    }

    if(loading){
        return <PageLoading></PageLoading>
    }
    return (
        <div className="mx-5 ">
            {
                user?.userRole === "admin" && <>
                
        <h1 className="text-3xl my-5 font-bold text-primary ">Unverified Users</h1>
        <div>
          <div className="w-full shadow-md sm:rounded-lg overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  {/* <th scope="col" className="py-3 px-6">
                    Picture
                  </th> */}
                  <th scope="col" className="py-3 px-6">
                    User Name
                  </th>
                  {/* <th scope="col" className="py-3 px-6">
                    Seller Name
                  </th> */}
                  <th scope="col" className="py-3 px-6">
                    User Email
                  </th>
                  <th scope="col" className="py-3 px-6">
                    User Role
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {unverifiedUsers &&
                  unverifiedUsers.map((user) => (
                    <tr key={user._id} className="bg-white border-b  ">
                      {/* <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                      >
                        <div className="mask mask-square w-12 h-12">
                          <img
                            src={user?.picture}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </th> */}
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {user?.name}
                      </th>
                      {/* <td className="py-4 px-6"> {user?.name}</td> */}
                      <td className="py-4 px-6"> {user?.email}</td>
                      <td className="py-4 px-6"> {user?.role}</td>
                    
                     
                      <td className="flex">
                        {
                          user?.verified ? "Verified" :<button onClick={()=>handleVerified(user._id)} className="btn btn-sm btn-primary">
                          Verify
                        </button>
                        }
                        <button onClick={()=>handleDelete(user._id)} className='btn btn-sm btn-error ml-2'>Delete</button>
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