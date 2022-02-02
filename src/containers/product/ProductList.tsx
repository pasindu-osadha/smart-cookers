import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../components/product/ProductCard';
import { getAllProducts } from '../../services/ProductService';

export const ProductList = () => {
  
  const [productData,setProductData]= useState([]);
   
  useEffect(()=>{
    getAllProducts().then((res)=> setProductData(res.data));
  },[]);
  return (
      <div className='grid grid-cols-4 gap-4 justify-around'>
          {productData.map(function(data,index){
              return <ProductCard key={index}
              productData = {data}/>
          })}
      </div>
  );

};
