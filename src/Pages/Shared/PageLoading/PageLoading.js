import React from 'react';

const PageLoading = () => {
    return (
        <div>
            <h1 className='text-5xl lg:text-8xl flex justify-center h-[100vh] items-center font-black'>L <span className="w-8 lg:w-16 h-8 lg:h-16 border-4 border-dashed rounded-full animate-spin border-primary"></span> ading <span className='animate-bounce text-primary'>...</span> </h1>
        </div>
    );
};

export default PageLoading;