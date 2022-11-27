import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../Porducts/Products';

const Category = () => {
    const products = useLoaderData()
    
    // console.log(products);
    return (
        <div>
            {
          products && products?.map(product =><Products 
            key={product._id}
            product={product}
            ></Products>)
        }
        </div>
    );
};

export default Category;