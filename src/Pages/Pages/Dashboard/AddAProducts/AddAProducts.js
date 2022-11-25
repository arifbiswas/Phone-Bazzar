import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import GeneralModal from "../../../../Components/GeneralModal/GeneralModal";
import { AuthContext } from "../../../../ContextApi/AuthProvider";

const AddAProducts = () => {
    const {user} = useContext(AuthContext);
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


  const {data : categories =[] , refetch} = useQuery({
    queryKey : ["categories"],
    queryFn : ()=>fetch("http://localhost:5000/categories")
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
      return data
    })
})



const { data: allBuyers = [] } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: () =>
      axios
        .get("http://localhost:5000/users?buyer=buyer")
        .then((res) => res.data)
        .catch((e) => console.log(e)),
  });

  return (
    <div className="mx-5 ">
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
              {allBuyers &&
                allBuyers.map((buyer) => (
                  <tr key={buyer._id} class="bg-white border-b  ">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {buyer?.email}
                    </th>
                    <td class="py-4 px-6">{buyer?.name}</td>
                    {/* <td class="py-4 px-6">
                    Products count 
                </td> */}

                    <td class="py-4 px-6">
                      <button className="btn btn-sm btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
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

export default AddAProducts;
