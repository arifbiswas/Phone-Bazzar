import React from "react";
import { Swiper, SwiperSlide ,} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const Carousel = () => {
  return (
    <div className="mt-12 ">
      <h2 className="font-bold text-center text-primary text-3xl">
        Advertisement
      </h2>
      <p className="text-center my-3">
        All seller can add your products add this section and verify your
        account with admin
      </p>
      <div>
        <Swiper navigation={SwiperSlide} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/400/arch" alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
