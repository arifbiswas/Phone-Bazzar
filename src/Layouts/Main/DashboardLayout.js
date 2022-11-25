import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthProvider";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import user1 from "../../Assets/user1.png";
import user2 from "../../Assets/user2.png";
import DashboardNavbar from "../../Pages/Shared/Navbar/DashboardNavbar";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
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
          <ul className="menu items-center gap-5 p-4 w-80  text-base-content">
          {/* profile  */}
          <div className=" rounded-lg  mt-12 ">
              <div className="flex justify-center items-center flex-col">
                <img
                  className="w-32 h-32 mb-3 rounded-full shadow-lg"
                  src={user?.photoURL ? user?.photoURL : user1 }
                  alt={user?.displayName}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-50 ">
                {user?.displayName}
                </h5>
                <span className="text-sm text-gray-50 ">Visual Designer</span>
              </div>
            </div>
          {/* profile  */}
            {/* <!-- Sidebar content here --> */}
           {/* menu list  */}
           <div>
           <li>
              <NavLink className={({isActive})=>isActive ? "mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600" : "mb-3 bg-white text-gray-600 font-bold  hover:bg-primary  hover:text-gray-50 outline hover:outline-white"} to="/dashboard/allSellers">
                All Sellers</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ? "mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600" : "mb-3 bg-white text-gray-600 font-bold  hover:bg-primary  hover:text-gray-50 outline hover:outline-white"} to="/dashboard/allBuyers">All Buyers</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ? "mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600" : "mb-3 bg-white text-gray-600 font-bold  hover:bg-primary  hover:text-gray-50 outline hover:outline-white"} to="/dashboard/myProducts">My Products</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ? "mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600" : "mb-3 bg-white text-gray-600 font-bold  hover:bg-primary  hover:text-gray-50 outline hover:outline-white"} to="/dashboard/myBuyers">My Buyers</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ? "mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600" : "mb-3 bg-white text-gray-600 font-bold  hover:bg-primary  hover:text-gray-50 outline hover:outline-white"} to="/dashboard/addProducts">Add Products</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive ? "mb-3 bg-primary  text-gray-50 outline outline-white font-bold hover:bg-white hover:text-gray-600" : "mb-3 bg-white text-gray-600 font-bold  hover:bg-primary  hover:text-gray-50 outline hover:outline-white"} to="/dashboard/myOrders">My Orders</NavLink>
            </li>
           </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
