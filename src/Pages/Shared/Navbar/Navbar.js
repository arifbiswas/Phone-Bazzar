import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
 
  return (
    <header className="shadow-md">
      <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div className="text-primary container flex flex-wrap items-center justify-between mx-auto">
          <Link
            to="/"
            className="flex text-primary  items-center text-3xl md:text-4xl"
          >
            <FaStore></FaStore>
            <span className=" ml-1 text-primary  text-lg md:text-3xl  self-center font-semibold whitespace-nowrap ">
              Phone Bazaar
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <button
              onClick={() => {
                setProfileOpen(!profileOpen);
                setNavbarOpen(false);
              }}
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
            >
              <span className="sr-only">Open user menu</span>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              className={
                profileOpen
                  ? `z-50 absolute top-16 right-8 md:right-52 my-4  list-none bg-white divide-y divide-gray-100 rounded shadow `
                  : `z-50 hidden my-4  list-none bg-white divide-y divide-gray-100 rounded shadow `
              }
            >
              <div className="px-4 py-3">
                <span className="block text-lg text-gray-900 ">
                  Bonnie Green
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate -400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-lg hover:bg-gray-100 text-gray-700 "
                        : "block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 "
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 "
                  >
                    Sign out
                  </Link>
                </li>
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
          <div
            className={
              navbarOpen
                ? `items-center justify-between absolute top-10 lg:top-0 lg:static w-96 md:flex md:w-auto md:order-1`
                : `items-center hidden justify-between  w-full md:flex md:w-auto md:order-1`
            }
            id="profile-menu"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   ">
              <li>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 border border-b-primary md:text-lg rounded md:bg-transparent md:text-primary  "
                      : "block py-2 pl-3 pr-4 p-4 border-2  md:text-lg rounded md:bg-transparent md:text-primary  md:p-0 "
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 border border-b-primary md:text-lg rounded md:bg-transparent md:text-primary  "
                      : "block py-2 pl-3 pr-4 p-4 border-2  md:text-lg rounded md:bg-transparent md:text-primary  md:p-0 "
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 border border-b-primary md:text-lg rounded md:bg-transparent md:text-primary  "
                      : "block py-2 pl-3 pr-4 p-4 border-2  md:text-lg rounded md:bg-transparent md:text-primary  md:p-0 "
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 border border-b-primary md:text-lg rounded md:bg-transparent md:text-primary  "
                      : "block py-2 pl-3 pr-4 p-4 border-2  md:text-lg rounded md:bg-transparent md:text-primary  md:p-0 "
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 border border-b-primary md:text-lg rounded md:bg-transparent md:text-primary  "
                      : "block py-2 pl-3 pr-4 p-4 border-2  md:text-lg rounded md:bg-transparent md:text-primary  md:p-0 "
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
