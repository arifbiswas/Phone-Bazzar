import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../../../Components/ConfirmationModal/ConfirmationModal';

const ReportedItems = () => {
    const [confirm , setConfirm] = useState(false)
    const [confirmId , setConfirmID] = useState("")

    const {data : reportedItems=[] , refetch} = useQuery({
        queryKey : ['reportedItems'],
        queryFn : ()=> axios.get('https://phone-bazaar-server-arifbiswas.vercel.app/report').then(res => {
          // console.log(res.data);
          return res.data;
    
        }).catch(e => {
          console.log(e);
        })
      })

      const handleDelete =(id)=>{
          setConfirmID(id)
      }
      useEffect(()=>{
        // console.log(confirmId,confirm);
        if(confirm){
          // console.log(confirmId)
            axios.delete(`https://phone-bazaar-server-arifbiswas.vercel.app/products/${confirmId}`).then(res => {
              console.log(res.data);
              if(res.data.deletedCount > 0){
                  refetch()
                  toast.success("Reported items Deleted")
                //   setLoading(false)
              }
          }).catch(e =>{
              console.log(e);
          })
          
        }
        
          },[confirmId,confirm,refetch])

    return (
        <div className='mx-5'>
            <h1 className='text-3xl my-5 font-bold text-primary '>Reported Products</h1>
           <div className="w-full shadow-md sm:rounded-lg overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="w-24 p-5 h-16 ">
                Picture
                </th>
                <th scope="col" className="w-24 p-5 h-16 ">
                Product Name
                </th>
                <th scope="col" className="w-24 p-5 h-16 ">
                      Category
                </th>
                <th scope="col" className="w-24 p-5 h-16 ">
                    Price 
                </th>
                <th scope="col" className="w-24 p-5 h-16 ">
                    Post Day
                </th>
                
                <th scope="col" className="w-24 p-5 h-16 ">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                reportedItems && reportedItems.map(report => 
                    <tr key={report._id} className="bg-white border-b  ">
                <th scope="row" className="w-24 p-5 h-16  font-medium text-gray-900 whitespace-nowrap ">
                <div className="mask mask-square w-12 h-12">
                <img src={report?.picture} alt="Avatar Tailwind CSS Component" />
              </div>
                </th>
                <th scope="row" className="w-24 p-5 h-16  font-medium text-gray-900 whitespace-nowrap ">
                    {report?.productName.length > 50 ?report?.productName.slice(0,50) + "..." : report?.productName }
                </th>
                <td className="w-24 p-5 h-16 ">
                {report?.productCategory}
                </td>
                <td className="w-24 p-5 h-16 ">
                {report?.productPrice} .Tk
                </td>
                <td className="w-24 p-5 h-16 ">
                    {report?.postDateInfo?.postDay}
                </td>
                
                <td className="w-24 p-5 h-16  relative">
                  <label
                  htmlFor="confirmation-modal"
                  onClick={()=>handleDelete(report._id)}
                  className='btn btn-sm btn-error w-full' >Delete Product</label>
                </td>
            </tr>
                    
                    )
            }
            
            
        </tbody>
    </table>
</div>
<ConfirmationModal setChange={setConfirm} tittle={"Delete Reported Product"} about={"Press yes 'Delete' this product, otherwise press 'Cancel'"}></ConfirmationModal>
        </div>
    );
};

export default ReportedItems;