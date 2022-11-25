import React from 'react';
import { Link } from "react-router-dom";
const DashboardNavbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
 
  <div className="flex-1">
    <a className="font-black text-primary normal-case text-xl">Dashboard</a>
  </div>
  <div className="flex-none ">
    <Link to="/" className='btn btn-primary mr-3'>Go Home</Link>
  </div>
  <div className="flex-none lg:hidden">
    <label htmlFor="dashboard-modal" className="btn btn-primary  drawer-button lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
  </div>
</div>
        </div>
    );
};

export default DashboardNavbar;