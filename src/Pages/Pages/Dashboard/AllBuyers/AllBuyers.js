import React from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import toast from 'react-hot-toast';
const AllBuyers = () => {

    const {data : allBuyers =[],refetch } = useQuery({
        queryKey : ["allBuyers"],
        queryFn : () => axios.get('http://localhost:5000/users?buyer=buyer').then(res =>res.data).catch(e => console.log(e))
    })

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


    return (
        <div className='mx-5 '>
            <h1 className='text-3xl my-5 font-bold text-primary '>All Buyers</h1>
            <div>
<div className="w-full shadow-md sm:rounded-lg overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Email
                </th>
                <th scope="col" className="py-3 px-6">
                    Name
                </th>
                {/* <th scope="col" className="py-3 px-6">
                    Total Products
                </th> */}
                
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                allBuyers && allBuyers.map(buyer => 
                    <tr key={buyer._id} className="bg-white border-b  ">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                    {buyer?.email}
                </th>
                <td className="py-4 px-6">
                {buyer?.name}
                </td>
                {/* <td className="py-4 px-6">
                    Products count 
                </td> */}
                
                <td className="py-4 px-6">
                   <button 
                   onClick={()=>handleDelete(buyer._id)}
                   className='btn btn-sm btn-error'>Delete</button>
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

export default AllBuyers;