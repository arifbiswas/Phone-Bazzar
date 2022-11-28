import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../ContextApi/AuthProvider';

const Categories = () => {
  const {user} = useContext(AuthContext);
  const navigate =useNavigate()
  const {data : categories =[] , refetch} = useQuery({
    queryKey : ["categories"],
    queryFn : ()=>fetch("https://phone-bazaar-server-arifbiswas.vercel.app/categories")
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
      return data
    })
})
 
  const handleProducts =()=>{
    navigate(`/categories`)
  }

    return (
        <section className='my-16'>
            <div className=''>
                <h2 className="font-bold text-center text-primary text-3xl">Most Sale Categories</h2>
      <p className="text-center my-3">Our all Mobile categories </p>
            </div>
           
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
            {
          categories && categories.map(category => <div
            key={category._id} 
          className="relative transition-all duration-200 shadow-lg hover:p-3 p-4 lg:p-10 rounded-lg  hover:shadow flex flex-col justify-center items-center">
            <img src={category?.brandLogo} className="rounded-md  w-full h-[150px] bg-white" alt="" />
            <Link 
            to={`/categories/${category?.categoryName}`}
            className="btn btn-primary py-4 w-full rounded-md mt-12 bg-primary text-gray-200 font-bold ">
            {category?.categoryName}
            </Link>
          
        </div> )
        }
       
      </div>
        </section>
    );
};

export default Categories;