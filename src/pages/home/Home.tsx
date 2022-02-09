import React, { useState } from 'react';
import { OutletSelect } from '../../components/Outlet/OutletSelect';
import { ProductCard } from '../../components/product/ProductCard';
import { ProductList } from '../../containers/product/ProductList';

export const Home = () => {


  return (

    <div className='h-full' >
      
      <ProductList />
    </div>
  );
};
