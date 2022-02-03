import React from 'react';
import { ProductCard } from '../../components/product/ProductCard';
import { ProductList } from '../../containers/product/ProductList';

export const Home = () => {
    return (
        <div className='h-full' >
            
          <ProductList/>
        </div>
    );
};
