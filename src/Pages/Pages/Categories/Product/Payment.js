import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate()
    const product = useLoaderData()
    console.log(product);
    const payment = {
        status : "sold" 
    }
    const advertise ={
        advertisement : false,
    }
    const handlePayment =(id)=>{
        console.log(id);
        axios.patch(`https://phone-bazaar-server-arifbiswas.vercel.app/products/${id}`,payment).then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                axios.patch(`https://phone-bazaar-server-arifbiswas.vercel.app/booked/${id}`,payment).then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                axios.patch(`https://phone-bazaar-server-arifbiswas.vercel.app/advertisement/${id}`,advertise).then(res =>{
                    // console.log(res.data);
                    if(res.data.modifiedCount > 0){
                        toast.success("Payment Successfully done")
                           navigate("/dashboard/myBooked")
                    }
                }).catch(e => {
                    console.log(e);
                })
            }
        }).catch(e =>{
            console.log(e);
        })
            }
        }).catch(e =>{
            console.log(e);
        })
       
    }

    

    return (
        <div>
            <h1 className='text-5xl mx-3 text-primary'>Payment</h1>
            <button
            onClick={()=>handlePayment(product._id)}
            className='btn btn-primary mx-5 my-5'>Payment Ok</button>
        </div>
    );
};

export default Payment;