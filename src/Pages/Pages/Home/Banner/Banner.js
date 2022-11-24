import React from "react";
import banner from '../../../../Assets/banner.svg';
const Banner = () => {
  return (
    <section className="">
      <div>
        <div class="container px-6 py-16 mx-auto">
          <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class="text-2xl font-semibold text-primary uppercase  lg:text-3xl">
                  Sale Old Products Buy New One And Lets Enjoy !
                </h1>

                <p class="mt-2 text-gray-600 ">
                  If you seller you can sale your old products and buy new products and if you buyer you can booked any products if you choice and you can go your profile and switch seller option and you can sale your old products
                </p>

                <button class="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-cyan-600 rounded-md lg:w-auto hover:bg-cyan-500 focus:outline-none focus:bg-cyan-500">
                  Go Dashboard
                </button>
              </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                class="w-full h-full lg:max-w-2xl"
                src={banner}
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
