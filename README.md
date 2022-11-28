adminEmail: <admin@gmail.com>

adminPassword: <123456>


 <Swiper navigation={SwiperSlide} modules={[Navigation]} className="mySwiper">
          {
            advertisements && advertisements.map(advertisement => 
              <SwiperSlide key={advertisement._id}>
                <div className="flex flex-1 flex-col lg:flex-row bg-base-100 shadow-xl">
        <figure>
          <img src={advertisement?.picture} alt={advertisement?.productName} className="w-full h-full rounded-lg lg:w-80" />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title text-primary">{advertisement?.productName}</h2>
          <div className='text-gray-400 flex items-center'> {advertisement?.verified ?<div className='flex items-center'> <h1>Post by verified user</h1> <img src={verified} className="w-12" alt="" /></div> : "Unverified"}
          </div>
          <p className="text-sm text-gray-500 "> {advertisement?.name} 
          {/* badge */}
          <small className="ml-3">{advertisement?.postDateInfo?.postDay} {advertisement?.postDateInfo?.postTime}</small><span>{}</span></p>
          <p className="text-gray-600">{advertisement?.description.length < 200 ? advertisement?.description : advertisement?.description.slice(0,200) + "...." } <small className="text-primary">see more Click Detail</small></p>
          <p className="text-lg">
            Price : <span className="text-primary">{
              advertisement?.productPrice
            }</span> Tk
          </p>
          <p className="text-lg">
            Contact Number : <span className="text-primary">{
              advertisement?.number
            }</span> 
          </p>
          <div className="card-actions justify-start">
            <Link to={`/product/${advertisement?._id}`} className="btn btn-primary">Detail</Link>
          </div>
        </div>
      </div>
              </SwiperSlide>
              ) 
          }
        </Swiper>
