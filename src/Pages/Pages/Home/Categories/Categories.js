import React from 'react';

const Categories = () => {
    return (
        <section className='my-16'>
            <div className=''>
                <h2 className="font-bold text-center text-primary text-3xl">Categories</h2>
      <p className="text-center my-3">Our all Mobile categories </p>
            </div>
            <div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-full">
  <div
	   class="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
	 
	   >
	<div class="w-16 h-16 bg-gray-100 rounded-lg"></div>

	<h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
	  Category 1
	</h2>
  </div>
	
</div>
            </div>
        </section>
    );
};

export default Categories;