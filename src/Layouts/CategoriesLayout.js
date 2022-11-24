import React from 'react';
import { Outlet } from 'react-router-dom';
import CategoriesOptions from '../Pages/Pages/Categories/CategoriesOptions/CategoriesOptions';

const CategoriesLayout = () => {
    return (
        <div>
            <CategoriesOptions></CategoriesOptions>
            <Outlet></Outlet>
        </div>
    );
};

export default CategoriesLayout;