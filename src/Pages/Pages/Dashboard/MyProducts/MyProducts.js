import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import GeneralModal from '../../../../Components/GeneralModal/GeneralModal';
import { AuthContext } from '../../../../ContextApi/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    // const [myProducts , setMyProducts] = useState([]);
   
    // useEffect(()=>{
    //     axios.get(`http://localhost:5000/products?email=${user?.email}`).then(res => {
    //   // console.log(res.data);
    //   setMyProducts(res.data)
    // }).catch(e =>{
    //   console.log(e);
    // })
    // },[user?.email])
    
    // console.log(myProducts);

    const {data : myProducts =[] , refetch} = useQuery({
        queryKey : ["myProducts",user?.email],
        queryFn : ()=>fetch(`http://localhost:5000/products?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
          // console.log(data)
          return data
        })
    })


    // Add Products 
    
    
    const [modalClose, setModalClose] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const postTime = new Date().toLocaleTimeString()
    const postDay = new Date().toDateString()
    const date = new Date()
    const postDateInfo ={
        postTime,
        postDay,
        date
    }

    const handleAddProducts = (data) =>{
        data.postDateInfo = postDateInfo;
        console.log(data);
        const picture = data.picture[0]
        const formData = new FormData()
        formData.append("image",picture)
        axios.post("https://api.imgbb.com/1/upload?key=5b4fcdb13ffc1a8120ad637767dc49e7",formData).then(res=>{
            if(res.data.data.url){
                data.picture = res.data.data.url;
                data.email = user.email;
                data.name = user.displayName;
                axios.post("http://localhost:5000/products",data).then(res => {
            console.log(res);
            refetch()
            reset()
            setModalClose(false)
            toast.success("Product Added Successfully")
            
        }).catch(e =>console.log(e))
            }
           
        }).catch(e=>{
            toast.error("Please Upload valid Photo")
            console.log(e);
        })
    }


  const {data : categories =[]} = useQuery({
    queryKey : ["categories"],
    queryFn : ()=>fetch("http://localhost:5000/categories")
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
      return data
    })
})

    return (
        <div className='mx-5 '>
             <div className="flex justify-between items-center">
        <h1 className='text-3xl my-5 font-bold text-primary '>All Products</h1>
            {/* <button className="btn btn-primary">Add New Products</button> */}
            <label
            onClick={()=>setModalClose(true)}
          htmlFor="add-modal"
          className="btn btn-primary text-white py-2 px-4 font-semibold rounded-md"
        >
        Add New Products
        </label>
        </div>
            <div>
            
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
                    Post Day
                </th>
                
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                myProducts && myProducts.map(myProduct => 
                    <tr key={myProduct._id} className="bg-white border-b  ">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                <div className="mask mask-square w-12 h-12">
                <img src={myProduct?.picture} alt="Avatar Tailwind CSS Component" />
              </div>
                </th>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                    {myProduct?.productName}
                </th>
                <td className="py-4 px-6">
                {myProduct?.productCategory}
                </td>
                <td className="py-4 px-6">
                {myProduct?.productPrice} .Tk
                </td>
                <td className="py-4 px-6">
                    {myProduct?.postDateInfo?.postDay}
                </td>
                
                <td className="py-4 px-6">
                   <button className='btn btn-sm btn-error'>Delete</button>
                </td>
            </tr>
                    
                    )
            }
            
            
        </tbody>
    </table>
</div>

            </div>

            {/* Modal  */}
            {modalClose&&
      <GeneralModal register={register} handleSubmit={handleSubmit} 
      handleAdd={handleAddProducts}
      title={"Add a new Products"}
      name={{label : "Product Name", register : "productName",placeholder : "product name"}}
      numberField={{label : "Product Price", register : "productPrice",placeholder : "product price"}}
      radioField1={{label : "Excellent", register : "quality",value : "excellent"}}
      radioField2={{label : "Good", register : "quality",value : "good"}}
      radioField3={{label : "Fair", register : "quality",value : "fair"}}
      mobileNumber={{label : "Mobile Number", register : "number",placeholder : "mobile number"}}
      location={{label : "location ", register : "location",placeholder : "Chittagong, Dhaka, etc."}}
      selection={{categories:categories ,register : "productCategory" }}
      description={{label : "Description ", register : "description",placeholder : "description...."}}
      imageFiled={{label : "Products Picture", register : "picture"}}
      ></GeneralModal> }

        </div>
    );
};

export default MyProducts;