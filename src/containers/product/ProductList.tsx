import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../components/product/ProductCard';
import { getAllProducts, getOutletProducts } from '../../services/ProductService';
import { ProductProps } from '../../types/Product.types';


export const ProductList = () => {

  const [productData, setProductData] = useState([]);

  const [outlet, setOutlet] = useState('Select an outlet');

  const handleOutlet = () => {
    console.log('handle outlet');
    getOutletProducts(outlet).then((res) => {
      setProductData(res.data)
      console.log(res.data);

    })
  }


  useEffect(() => {
    getOutletProducts('COLOMBO').then((res) => setProductData(res.data));
  }, []);
  return (
    <>
      <div>

        <div className="flex flex-col justify-center mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 ">

          <div className="flex ml-6 items-center ">
            <span className="mr-3">Outlet</span>
            <div className="relative">
              <select title='selectstore' onChange={(e) => {
                {
                  setOutlet(e.target.value);
                  console.log('e.target.value');
                  handleOutlet()
                }
              }} defaultValue='Select' className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-sky-700 text-base pl-3 pr-10">
                <option value={'Select an outlet'} > Select an outlet</option>
                <option value={'COLOMBO'}>COLOMBO</option>
                <option value={'KALUTARA'}> KALUTARA</option>
                <option value={'GALLE'}>GALLE</option>
                <option value={'JAFFNA'}>JAFFNA</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>



      <div className='grid grid-cols-4 gap-36 m-10 '>
        {productData.map(function (data, index) {

          // if (data.outlet === outlet)
          if (1) {

            return <ProductCard key={index} productData={data} />
          }
        })}
      </div>
    </>
  );

};
