import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from '@tanstack/react-query'

import GeneralModal from "../../../../Components/GeneralModal/GeneralModal";
import axios from "axios";
import toast from "react-hot-toast";
import Categories from "../Categories/Categories";
const CategoriesOptions = () => {
  const [modalClose, setModalClose] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const {data : categories =[] , refetch} = useQuery({
    queryKey : ["categories"],
    queryFn : ()=>fetch("http://localhost:5000/categories")
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
      return data
    })
})

  const handleAddCategory = (categoryInfo) => {
    // console.log(categoryInfo);
    const Logo = categoryInfo.categoryLogo[0];
    console.log(Logo);
    const formData = new FormData();
    formData.append("image", Logo);
    fetch(`https://api.imgbb.com/1/upload?key=77702260127cd67cec6699998c4733dd`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if(data?.data?.url){
        const newCategory = {
          categoryName: categoryInfo.categoryName,
          brandLogo: data?.data?.url,
        };
        axios.post("http://localhost:5000/categories", newCategory)
          .then((res) => {
            console.log(res.data);
            if (res.data.acknowledged) {
              reset();
              toast.success("Add a new category successfully");
              setModalClose(false);
              refetch()
            }
          })
          .catch((e) => console.log(e))};
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className=" p-4  bg-white">
      <div className="flex mb-5  text-primary items-center justify-between mx-8 font-bold text-1xl">
        <h1>{"Categories"}</h1>
       
        <label
          onClick={() => setModalClose(true)}
          htmlFor="add-modal"
          className="btn btn-primary text-white py-2 px-4 font-semibold rounded-md"
        >
          Add Category
        </label>
      </div>

     
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
        {
          categories && categories.map(category => <div
            key={category._id} 
          className="relative transition-all duration-200 shadow-lg hover:p-3 p-4 lg:p-10 rounded-lg  hover:shadow flex flex-col justify-center items-center">
            <img src={category?.brandLogo} className="rounded-md  w-full h-[150px] bg-white" alt="" />

            <button className=" py-4 w-full rounded-md mt-12 bg-primary text-gray-200 font-bold ">
            {category?.categoryName}
            </button>
          
        </div> )
        }
       
      </div>
      <div>
        <Categories 
          ></Categories>
        </div>
      {modalClose && (
        <GeneralModal
          name={{
            label: "Category Name",
            placeholder: "category Name",
            register: "categoryName",
          }}
          imageFiled={{
            label: "*Brand Logo/only image",
            register: "categoryLogo",
          }}
          title={"Add a new Category"}
          register={register}
          handleSubmit={handleSubmit}
          handleAdd={handleAddCategory}
        ></GeneralModal>
      )}
    </div>
  );
};

export default CategoriesOptions;
