import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ConfirmationModal from '../../../../Components/ConfirmationModal/ConfirmationModal';
import GeneralModal from '../../../../Components/GeneralModal/GeneralModal';
import { AuthContext } from '../../../../ContextApi/AuthProvider';

const MyProducts = () => {
    const {user,loading,setLoading} = useContext(AuthContext);
    const [confirm , setConfirm] = useState(false)
    const [confirmId , setConfirmID] = useState("")

    if(!user.userRole && !user.verifiedUser){
        setLoading(true)
        axios.get(`https://phone-bazaar-server-arifbiswas.vercel.app/dbUser?email=${user?.email}`,{
            headers : {
                authorization : `bearer ${localStorage.getItem("authToken")}`
            }
        }).then(res => {
          // console.log(res.data);
          user.userRole = res.data.role ;
          user.verifiedUser = res.data.verified ;
          // setKeepUser({userRole : res.data.role ,verifiedUser : res.data.verified})
          setLoading(false)
        //   console.log( res.data);
      }).catch(e=>{
          console.log(e)
          setLoading(false)
      
          
      })
      }

  
    const {data : myProducts =[] , refetch} = useQuery({
        queryKey : ["myProducts",user?.email],
        queryFn : ()=>fetch(`https://phone-bazaar-server-arifbiswas.vercel.app/products?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
        //   console.log(data)
          return data
        })
    })

    // console.log(user);
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
        
        data.status = "available";
        data.advertisement = false;
        data.email = user?.email;
        data.name = user?.displayName;
        data.verified = user?.verifiedUser;

        // console.log(data);
        const picture = data.picture[0]
        const formData = new FormData()
        formData.append("image",picture)
        axios.post("https://api.imgbb.com/1/upload?key=5b4fcdb13ffc1a8120ad637767dc49e7",formData).then(res=>{
            if(res.data.data.url){
                data.picture = res.data.data.url;
               
                axios.post("https://phone-bazaar-server-arifbiswas.vercel.app/products",data).then(res => {
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
    queryFn : ()=>fetch("https://phone-bazaar-server-arifbiswas.vercel.app/categories")
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
      return data
    })
})
   
    const handleAdvertize =(id)=>{
        setConfirmID(id)
    }
    useEffect(()=>{
      // console.log(confirmId,confirm);
      if(confirm){
        const advertise = {
            advertisement : true
        }
        // console.log(confirmId)
        axios.patch(`https://phone-bazaar-server-arifbiswas.vercel.app/advertisement/${confirmId}`,advertise).then(res =>{
            // console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch()
                toast.success("Advertise is Active")
            }
        }).catch(e => {
            console.log(e);
        })
        
      }
      
        },[confirmId,confirm,refetch])

       


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
            
<div className="w-full shadow-md sm:rounded-lg overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className=" w-24 p-5 h-16">
                Picture
                </th>
                <th scope="col" className=" w-24 p-5 h-16">
                Product Name
                </th>
                <th scope="col" className=" w-24 p-5 h-16">
                      Category
                </th>
                <th scope="col" className=" w-24 p-5 h-16">
                    Price 
                </th>
                <th scope="col" className=" w-24 p-5 h-16">
                    Post Day
                </th>
                
                <th scope="col" className=" w-24 p-5 h-16">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                myProducts && myProducts.map(myProduct => 
                    <tr key={myProduct._id} className="bg-white border-b  ">
                <th scope="row" className=" w-24 p-5 h-16 font-medium text-gray-900 whitespace-nowrap ">
                <div className="mask mask-square w-12 h-12">
                <img src={myProduct?.picture} alt="Avatar Tailwind CSS Component" />
              </div>
                </th>
                <th scope="row" className=" w-24 p-5 h-16 font-medium text-gray-900 whitespace-nowrap ">
                    {myProduct?.productName.length > 50 ?myProduct?.productName.slice(0,50) + "..." : myProduct?.productName }
                </th>
                <td className=" w-24 p-5 h-16">
                {myProduct?.productCategory}
                </td>
                <td className=" w-24 p-5 h-16">
                {myProduct?.productPrice} .Tk
                </td>
                <td className=" w-24 p-5 h-16">
                    {myProduct?.postDateInfo?.postDay}
                </td>
                
                <td className=" w-24 p-5 h-16 relative">
                    <p className='absolute animate-pulse text-5xl -top-1 left-3 '>{myProduct?.advertisement ?<span className='bg-green-500  p-3 mask mask-circle '></span> : ""}</p>
                   {myProduct?.status === "available" ? <span
                    className='btn btn-primary w-full' ><label 
                    htmlFor={!myProduct?.advertisement ? "confirmation-modal" : ""}
                   onClick={()=>handleAdvertize(myProduct?._id)}
                   >{myProduct?.advertisement ?"Advertisement Active" :<span className='flex'>
                   <FaChevronRight></FaChevronRight>available<FaChevronLeft></FaChevronLeft>
                   </span> }</label></span> : <button className='btn btn-secondary w-full' disabled>Sold</button>
                   
                   }
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
       <ConfirmationModal setChange={setConfirm} tittle={"Are you run advertisement"} about={"Press  'Yes' for advertise this product, otherwise press 'Cancel'"}></ConfirmationModal>
        </div>
    );
};

export default MyProducts;