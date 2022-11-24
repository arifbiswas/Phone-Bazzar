import { createBrowserRouter } from "react-router-dom";
import CategoriesLayout from "../../Layouts/CategoriesLayout";
import DashboardLayout from "../../Layouts/Main/DashboardLayout";
import Main from "../../Layouts/Main/Main";
import Login from "../../Pages/Log/Login/Login";
import SignUp from "../../Pages/Log/SignUp/SignUp";
import Categories from "../../Pages/Pages/Categories/Categories/Categories";
import Dashboard from "../../Pages/Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

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
        ]
    },
    {
        path : "/dashboard",
        element : <DashboardLayout></DashboardLayout>,
        children : [
            {
                path : "",
                element : <Dashboard></Dashboard>
            }
        ]
    }
])