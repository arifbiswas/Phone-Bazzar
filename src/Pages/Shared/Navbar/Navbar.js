import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaMobile, FaMobileAlt, FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../ContextApi/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PageLoading from "../PageLoading/PageLoading";

const Navbar = () => {
  const navigate = useNavigate()
  const {user ,logOut,setLoading,loading} = useContext(AuthContext);

  const [profileOpen, setProfileOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
 
  const handleLogOut =()=>{
    navigate('/login')
    setProfileOpen(false)
    setLoading(false)
    localStorage.removeItem("authToken")
    logOut()
  }

    
    const {data : carts, refetch} = useQuery({
      queryKey : ["cart",user?.email],
      queryFn : ()=> axios.get(`http://localhost:5000/carts?email=${user?.email}`).then(res =>{
                // console.log(res.data);
                return res.data
            }).catch(e => console.log(e))
    })

    if(loading){
      refetch()
      return <PageLoading></PageLoading>
    }

  return (
    <header className="shadow-md">
      <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        
        <div className="text-primary container flex flex-wrap items-center justify-between mx-auto">
          <Link
            to="/"
            className="flex text-primary  items-center text-3xl md:text-5xl  rounded-md  p-3"
          >
            <p className="rotate-12"><FaMobileAlt></FaMobileAlt></p>
            <p className="-rotate-12"><FaMobile></FaMobile></p>
            <span className=" ml-1 text-primary  text-lg md:text-4xl  self-center font-semibold whitespace-nowrap ">
              Phone Bazaar
            </span>
          </Link>

          {/* Profile  */}
           
          {
            user?.uid && <div className="flex items-center md:order-2">
              <div className="relative hidden lg:block -left-6">
                {/* Cart  */}
                {
                  user?.userRole === "buyer" && <Link to="/cart" className="btn btn-primary text-lg">
                    <span className="absolute -top-3 -right-3 text-white border border-white bg-primary px-3 rounded-full ">{carts?.length}</span>
                  <FaShoppingCart></FaShoppingCart>
                  </Link>
                }

              </div>
            <label
            tabIndex={0}
              onClick={() => {
                setProfileOpen(!profileOpen);
                setNavbarOpen(false);
              }}
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
            >
              <span className="sr-only">Open</span>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </label>
            
            {/* <!-- Dropdown menu --> */}
            <div
              className={
                profileOpen
                  ? `z-50 absolute dropdown dropdown-end top-16 right-8 lg:right-52 my-4  list-none bg-white divide-y divide-gray-100 rounded shadow `
                  : `z-50 hidden my-4 dropdown dropdown-end list-none bg-white divide-y divide-gray-100 rounded shadow `
              }
              
            >
              <div className="px-4 py-3">
                <span className="block text-lg text-gray-900 ">
                {user?.displayName}
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate -400">
                {user?.email}
                </span>
              </div>
              <ul tabIndex={0} className="py-1" aria-labelledby="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-lg bg-gray-100 text-white   lg:text-primary border border-primary "
                        : "block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 "
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <button
                  onClick={handleLogOut}
                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 "
                  >
                    Sign out
                  </button>
                </li>
                {/* cart  */}
                {
                  user?.userRole === "buyer" && <li>
                  <div className=" via-current flex justify-center lg:hidden border-t px-2 py-3">
                  <Link to="/cart" className="btn btn-primary w-full text-lg relative">
                  <span className="absolute top-2 right-2 text-white border border-white bg-primary px-3 rounded-full ">{carts?.length}</span>
                  <FaShoppingCart></FaShoppingCart>
                  </Link>
                </div>
                  </li>
                }
              </ul>
            </div>
            <button
              onClick={() => {
                setNavbarOpen(!navbarOpen);
                setProfileOpen(false);
              }}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="false"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          }
          <div
            className={
              navbarOpen
                ? `z-50 items-center justify-between absolute right-[2px] top-16 shadow-lg lg:shadow-sm lg:top-0 lg:static  md:flex md:w-auto md:order-1`
                : `items-center hidden justify-between  w-full md:flex md:w-auto md:order-1`
            }
            id="profile-menu"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-4 transition-all duration-700 border text-white bg-primary  border-b-primary md:text-lg rounded md:bg-transparent md:text-primary  "
                      : "block py-2 px-4   md:text-lg rounded md:bg-transparent md:text-primary   "
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-4 transition-all duration-700 border text-white bg-primary  border-b-primary md:text-lg rounded md:bg-transparent md:text-primary  "
                    : "block py-2 px-4   md:text-lg rounded md:bg-transparent md:text-primary   "
                }
                >
                  Categories
                </NavLink>
              </li>
            
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-4 transition-all text-white bg-primary  duration-700 border border-b-primary md:text-lg rounded md:bg-transparent md:text-primary  "
                    : "block py-2 px-4   md:text-lg rounded md:bg-transparent md:text-primary   "
                }
                >
                  Blogs
                </NavLink>
              </li>
              {
                !user?.email && <>
                

                <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-4 transition-all text-white bg-primary  duration-700 border border-b-primary md:text-lg rounded md:bg-transparent md:text-primary  "
                    : "block py-2 px-4   md:text-lg rounded md:bg-transparent md:text-primary   "
                }
                >
                  Login
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/signUp"
                  className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-4 transition-all text-white bg-primary  duration-700 border border-b-primary md:text-lg rounded md:bg-transparent md:text-primary  "
                    : "block py-2 px-4   md:text-lg rounded md:bg-transparent md:text-primary   "
                }
                >
                  SignUp
                </NavLink>
              </li> */}


                </>
              }
            
               
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
