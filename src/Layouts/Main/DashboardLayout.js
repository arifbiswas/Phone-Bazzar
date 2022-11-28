import React, { useContext } from "react";

import {  NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthProvider";

import user1 from "../../Assets/user1.png";
import verified from '../../Assets/verified1.png'
import DashboardNavbar from "../../Pages/Shared/Navbar/DashboardNavbar";

import PageLoading from "../../Pages/Shared/PageLoading/PageLoading";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import ButtonLoader from "../../Components/ButtonLoader/ButtonLoader";
import axios from "axios";

const DashboardLayout = () => {
  const {user , loading ,logOut ,setLoading} = useContext(AuthContext);


  
  if(!user.userRole && !user.verifiedUser){
    // setLoading(true)
    axios.get(`https://phone-bazaar-server-arifbiswas.vercel.app/dbUser?email=${user?.email}`,{
      headers : {
          authorization : `bearer ${localStorage.getItem("authToken")}`
      }
  }).then(res => {
      console.log(res.data);
      user.userRole = res.data.role ;
      user.verifiedUser = res.data.verified ;
      setLoading(false)
  }).catch(e=>{
      console.log(e)
      setLoading(false)
  })
  }

  const handleLoOut =()=>{
   
    logOut()
   
  }

  // if(loading){
  //   return <PageLoading></PageLoading>
  // }
 console.log(user);
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-modal" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          
        </div>
        <div className="drawer-side border bg-base-100 lg:bg-primary">
          <label htmlFor="dashboard-modal" className="drawer-overlay"></label>
          <ul className="menu items-center gap-5 p-4 w-80  bg-primary  text-base-content">
          {/* profile  */}
          <div className=" rounded-lg  mt-12 ">
              <div className="flex justify-center items-center flex-col relative">
                <img
                  className="w-32 h-32 mb-3 rounded-full shadow-lg"
                  src={user?.photoURL ? user?.photoURL : user1 }
                  alt={user?.displayName}
                />
                {
                  user.verifiedUser && <img src={verified} className="w-24 absolute -right-4 bottom-12" alt="" />
                }
                <h5 className="mb-1 text-xl font-medium text-gray-50 ">
                {user?.displayName}
                </h5>
                <div className='text-gray-400 flex items-center'>
                <span className="text-sm text-gray-50 ">{user?.userRole}</span>
                  
                   {user?.verifiedUser ?<span className='flex items-center ml-2'> <h1 className="text-white"> verified</h1></span> : "Unverified"}
          </div>
              </div>
            </div>
          {/* profile  */}
            {/* <!-- Sidebar content here --> */}
           {/* menu list  */}
           <div className="flex flex-col justify-between">
           <div className="flex flex-col gap-4">
            {
            user?.userRole ===  "admin" && <>
               <li>
              <NavLink className={({isActive})=>isActive ?"mb-3 bg-white text-gray-600 font-bold   outline w-full hover:outline-white"  :"mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600 w-full" } to="/dashboard">
                Dashboard</NavLink>
            </li>
               <li>
              <NavLink className={({isActive})=>isActive ?"mb-3 bg-white text-gray-600 font-bold   outline w-full hover:outline-white"  :"mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600 w-full" } to="/dashboard/allSellers">
                All Sellers</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ?"mb-3 bg-white text-gray-600 font-bold   outline w-full hover:outline-white"  :"mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600 w-full" } to="/dashboard/allBuyers">All Buyers</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ?"mb-3 bg-white text-gray-600 font-bold   outline w-full hover:outline-white"  :"mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600 w-full" } to="/dashboard/reportedItems">Reported Items</NavLink>
            </li>
              </>
            }
          {
          user?.userRole === "seller" && <>
              <li>
              <NavLink className={({isActive})=>isActive ?"mb-3 bg-white text-gray-600 font-bold   outline w-full hover:outline-white"  :"mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600 w-full" } to="/dashboard/myProducts">My Products</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ?"mb-3 bg-white text-gray-600 font-bold   outline w-full hover:outline-white"  :"mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600 w-full" } to="/dashboard/myBuyers">My Buyers</NavLink>
            </li>
      
             </>
          }
          {
          user?.userRole === "buyer" && <>
              <li>
              <NavLink className={({isActive})=>isActive ?"mb-3 bg-white text-gray-600 font-bold   outline w-full hover:outline-white"  :"mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600 w-full" } to="/dashboard/myBooked">My Booked</NavLink>
            </li>
             </>
          }
           
           
           </div>
           <div>
           <button
           onClick={handleLoOut}
           className="btn mb-3 bg-primary mt-40 lg:mt-56 text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600 w-full"><span className="mr-3"><FaArrowAltCircleLeft></FaArrowAltCircleLeft></span> {loading ?<ButtonLoader></ButtonLoader> :"LogOut" } </button>
           </div>
           </div>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
