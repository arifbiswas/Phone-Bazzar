import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Categories = () => {

  const {data : categories =[] , refetch} = useQuery({
    queryKey : ["categories"],
    queryFn : ()=>fetch("http://localhost:5000/categories")
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
      return data
    })
})

    return (
        <section className='my-16'>
            <div className=''>
                <h2 className="font-bold text-center text-primary text-3xl">Most Sale Categories</h2>
      <p className="text-center my-3">Our all Mobile categories </p>
            </div>
           
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
        {
          categories && categories.map(category => <div
            key={category._id} 
          className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center">
            <img src={category?.brandLogo} className="rounded-md" alt="" />
  
          <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
            {category?.categoryName}
          </h2>
        </div> )
        }
       
      </div>
        </section>
    );
};

export default Categories;