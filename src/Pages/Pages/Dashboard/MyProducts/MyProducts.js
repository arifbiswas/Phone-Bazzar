import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const MyProducts = () => {
    const {data : allBuyers =[] } = useQuery({
        queryKey : ["allBuyers"],
        queryFn : () => axios.get('http://localhost:5000/users?buyer=buyer').then(res =>res.data).catch(e => console.log(e))
    })
    

    return (
        <div className='mx-5 '>
            <h1 className='text-3xl my-5 font-bold text-primary '>All Buyers</h1>
            <div>
            <label
            htmlFor="dashboard-modal"
            className="btn btn-primary  drawer-button lg:hidden"
          >
            Open drawer
          </label>
<div class="w-full shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Email
                </th>
                <th scope="col" class="py-3 px-6">
                    Name
                </th>
                {/* <th scope="col" class="py-3 px-6">
                    Total Products
                </th> */}
                
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                allBuyers && allBuyers.map(buyer => 
                    <tr key={buyer._id} class="bg-white border-b  ">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                    {buyer?.email}
                </th>
                <td class="py-4 px-6">
                {buyer?.name}
                </td>
                {/* <td class="py-4 px-6">
                    Products count 
                </td> */}
                
                <td class="py-4 px-6">
                   <button className='btn btn-sm btn-error'>Delete</button>
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

export default MyProducts;