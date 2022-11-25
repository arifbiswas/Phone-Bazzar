import { createBrowserRouter } from "react-router-dom";
import CategoriesLayout from "../../Layouts/CategoriesLayout";
import DashboardLayout from "../../Layouts/Main/DashboardLayout";
import Main from "../../Layouts/Main/Main";
import Login from "../../Pages/Log/Login/Login";
import SignUp from "../../Pages/Log/SignUp/SignUp";
import Product from "../../Pages/Pages/Categories/Product/Product";


import AllBuyers from "../../Pages/Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Pages/Dashboard/Dashboard/Dashboard";
import MyBuyers from "../../Pages/Pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Pages/Dashboard/MyProducts/MyProducts";
import Home from "../../Pages/Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoutes from "../Private/PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
            },
            {
                path : '/categories',
                element : <CategoriesLayout></CategoriesLayout>,
            },
            {
                path : '/login',
                element : <Login></Login>,
            },
            {
                path : '/signUp',
                element : <SignUp></SignUp>,
            },
            {
                path : '/product/:id',
                element : <PrivateRoutes><Product></Product></PrivateRoutes>,
                loader : ({params})=>fetch(`http://localhost:5000/product/${params.id}`)
            },
        ]
    },
    {
        path : "/dashboard",
        element : <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children : [
            {
                path : "/dashboard",
                element : <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
            },
            {
                path : "/dashboard/myProducts",
                element : <PrivateRoutes><MyProducts></MyProducts></PrivateRoutes>
            },
            {
                path : "/dashboard/myBuyers",
                element : <PrivateRoutes><MyBuyers></MyBuyers></PrivateRoutes>
            },
            {
                path : "/dashboard/allSellers",
                element : <PrivateRoutes><AllSellers></AllSellers></PrivateRoutes>
            },
            {
                path : "/dashboard/allBuyers",
                element : <PrivateRoutes><AllBuyers></AllBuyers></PrivateRoutes>
            },
            {
                path : "/dashboard/myOrders",
                element : <PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>
            },
        ]
    }
])