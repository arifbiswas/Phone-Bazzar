import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../ContextApi/AuthProvider';

const MyBuyers = () => {
    const {user} = useContext(AuthContext);
    const {data : myBuyers =[] } = useQuery({
        queryKey : ["myBuyers"],
        queryFn : () => axios.get(`http://localhost:5000/booked?email=${user?.email}`).then(res =>res.data).catch(e => console.log(e))
    })

    return (
        <div className='mx-5 '>
            <h1 className='text-3xl my-5 font-bold text-primary '>All Buyers</h1>
            <div>
            
<div className="w-full shadow-md sm:rounded-lg overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className=" w-24 p-5 h-16">
                    Name
                </th>
                <th scope="col" className=" w-24 p-5 h-16">
                    Email
                </th>
                
                <th scope="col" className=" w-24 p-5 h-16">
                    Number
                </th>
                
                <th scope="col" className=" w-24 p-5 h-16">
                 Meet Location
                </th>
            </tr>
        </thead>
        <tbody>
            {
                myBuyers && myBuyers.map(buyer => 
                    <tr key={buyer._id} className="bg-white border-b  ">
                <th scope="row" className=" w-24 p-5 h-16 font-medium text-gray-900 whitespace-nowrap ">
                    
                    {buyer?.buyerName}
                </th>
                <td className=" w-24 p-5 h-16">
                {buyer?.buyerEmail}
                </td>
                <td className=" w-24 p-5 h-16">
                    {buyer?.buyerNumber}
                </td>
                
                <td className=" w-24 p-5 h-16">
                    {buyer?.location}
                   {/* <button className='btn btn-sm btn-error'>Delete</button> */}
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

export default MyBuyers;