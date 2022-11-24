import React from "react";
import { Link } from "react-router-dom";
import banner from '../../../../Assets/banner.svg';
import banner2 from "../../../../Assets/photo1.png";
import banner3 from "../../../../Assets/photo2.jpg";
const Banner = () => {
  return (
    <section className="">
      <div>
        <div className="container px-6  mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-2xl font-semibold text-primary uppercase  lg:text-3xl">
                  Sale Old Products Buy New One And Have Relax !
                </h1>

                <p className="mt-2 text-gray-600 ">
                  If you seller you can sale your old products and buy new products and if you buyer you can booked any products if you choice and you can go your profile and switch seller option and you can sale your old products
                </p>

                <button className="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-cyan-600 rounded-md lg:w-auto hover:bg-cyan-500 focus:outline-none focus:bg-cyan-500">
                  <Link to="dashboard">Go Dashboard</Link>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full rounded-md lg:max-w-2xl"
                src={banner2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
