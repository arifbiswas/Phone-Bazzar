import React from "react";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu items-center gap-5 p-4 w-80 bg-base-100 text-base-content">
          {/* profile  */}
          <div className=" rounded-lg  mt-12 ">
              <div className="flex justify-center items-center flex-col">
                <img
                  className="w-32 h-32 mb-3 rounded-full shadow-lg"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 ">Visual Designer</span>
              </div>
            </div>
          {/* profile  */}
            {/* <!-- Sidebar content here --> */}
           {/* menu list  */}
           <div>
           <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
           </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
