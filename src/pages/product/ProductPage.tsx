import React from 'react';
import { Link } from 'react-router-dom';
import { ProductRouteBtn } from '../../components/product/ProductRouteBtn';
import { AddProduct } from '../../containers/product/AddProduct';

export const ProductPage = () => {
    return (
        <div className='min-h-screen bg-white flex justify-center'>

            <div className='m-3'>
                <Link to="/add-product" >
                    <ProductRouteBtn name=' Add product' />
                </Link>
            </div>

            <div className='m-3'>
                <Link to="/view-all-product" >
                    <ProductRouteBtn name=' View all Products' />
                </Link>
            </div>



        </div>
    );
};
