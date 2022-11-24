import React from 'react';
import {  Navigate, useLocation, useNavigate, useRouteError } from 'react-router-dom';
import errorPicture from '../../../Assets/ErrorPage.svg';
const ErrorPage = () => {
    const error = useRouteError();
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/";
    const navigate = useNavigate()
    const handleGoBack =()=>{
        navigate(from,{replace : true})
    }
    return (
        <div>
            <section class="bg-white ">
    <div class="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
        <img src={errorPicture} alt="" />
        <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl ">{error.statusText} {error.status}</h1>
        <p class="font-light text-gray-500 md:text-lg xl:text-xl ">Something Wrong</p>
        <button className='btn btn-primary my-4' onClick={handleGoBack}>Go back</button>

    </div>
</section>
        </div>
    );
};

export default ErrorPage;