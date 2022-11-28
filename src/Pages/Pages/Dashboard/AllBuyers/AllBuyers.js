import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../../Components/ConfirmationModal/ConfirmationModal';
const AllBuyers = () => {
    const [confirm , setConfirm] = useState(false)
    const [confirmId , setConfirmID] = useState("")
    const {data : allBuyers =[],refetch } = useQuery({
        queryKey : ["allBuyers"],
        queryFn : () => axios.get('http://localhost:5000/users?buyer=buyer').then(res =>res.data).catch(e => console.log(e))
    })

    const handleDelete =(id)=>{
        // console.log(id);
       setConfirmID(id)
    }
    
    useEffect(()=>{
      // console.log(confirmId,confirm);
      if(confirm){
        // console.log(confirmId)
        axios.delete(`http://localhost:5000/users/${confirmId}`).then(res => {
            // console.log(res.data);
            refetch()
            if(res.data.deletedCount > 0){
                toast.success("Deleted")
            }
        }).catch(e =>{
            console.log(e);
        })
        
      }
      
        },[confirmId,confirm,refetch])


    return (
        <div className='mx-5 '>
            <h1 className='text-3xl my-5 font-bold text-primary '>All Buyers</h1>
            <div>
<div className="w-full shadow-md sm:rounded-lg overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="w-24 p-5 h-16 ">
                    Name
                </th>
                <th scope="col" className="w-24 p-5 h-16 ">
                     Email
                </th>
                <th scope="col" className="w-24 p-5 h-16 ">
                     Status
                </th>
                <th scope="col" className="w-24 p-5 h-16 ">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                allBuyers && allBuyers.map(buyer => 
                    <tr key={buyer._id} className="bg-white border-b  ">
                <th scope="row" className="w-24 p-5 h-16 font-medium text-gray-900 whitespace-nowrap ">
                   {buyer?.name}
                </th>
                <td className="w-24 p-5 h-16">
                     {buyer?.email}
                </td>
                <td className="w-24 p-5 h-16">{buyer?.verified ?"Verified" :"Unverified"}</td>
                <td className="w-24 p-5 h-16">
                   <label 
                   htmlFor="confirmation-modal"
                   onClick={()=>handleDelete(buyer._id)}
                   className='btn btn-sm btn-error'>Delete</label>
                </td>
            </tr>
                    
                    )
            }
            
            
        </tbody>
    </table>
</div>

            </div>
            <ConfirmationModal setChange={setConfirm} tittle={"Are you 'Delete' this Buyer ?"} about={" remember one think if you delete this Buyer can not undo"}></ConfirmationModal>
        </div>
    );
};

export default AllBuyers;