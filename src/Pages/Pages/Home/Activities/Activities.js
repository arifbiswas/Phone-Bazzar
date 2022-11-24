import React from "react";
import { FaMobile, FaMoneyCheckAlt, FaPhone, FaUserFriends } from "react-icons/fa";

const Activities = () => {
  return (
    <section className="my-12">
      <div class="flex flex-col ">
        <h2 className="font-bold text-center text-primary text-3xl">Activities</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-4">
          <div class="flex flex-col md:flex-row items-center justify-between px-20 gap-5 p-4 rounded-xl shadow-lg bg-white ">
            <div class="flex items-center justify-center bg-primary text-white text-lg h-12 w-12 rounded-full border border-cyan-100">
              <FaMoneyCheckAlt></FaMoneyCheckAlt>
            </div>
              <h2 class="font-semibold">574 Sales</h2>
          </div>

          <div class="flex flex-col md:flex-row items-center justify-between px-20 gap-5 p-4 rounded-xl shadow-lg bg-white ">
            <div class="flex items-center justify-center bg-primary text-white text-lg h-12 w-12 rounded-full border border-cyan-100">
             <FaUserFriends></FaUserFriends>
            </div>

            <div class="ml-4">
              <h2 class="font-semibold">1823 Users</h2>
            
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-between px-20 gap-5 p-4 rounded-xl shadow-lg bg-white ">
            <div class="flex items-center justify-center bg-primary text-white text-lg h-12 w-12 rounded-full border border-cyan-100">
             <FaMobile></FaMobile>
            </div>

            <div class="ml-4">
              <h2 class="font-semibold">548 add products</h2>
            
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-between px-20 gap-5 p-4 rounded-xl shadow-lg bg-white ">
            <div class="flex items-center justify-center bg-primary text-white text-lg h-12 w-12 rounded-full border border-cyan-100">
              <FaPhone></FaPhone>
            </div>

            <div class="ml-4">
              <h2 class="font-semibold">129 Contact</h2>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
