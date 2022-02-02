import React from 'react';
import { ProductCard } from '../../components/product/ProductCard';

export const Home = () => {
    return (
        <div className='h-full grid grid-cols-3 gap-4 m-2 p-5 ' >
            
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
};
