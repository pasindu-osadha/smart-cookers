import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../components/product/ProductCard';
import { ProductinfoProps } from '../../components/product/ProductInfoCard';
import { getAllProducts, getOutletProducts } from '../../services/ProductService';


export const ProductList = () => {

  const [productData, setProductData] = useState<ProductinfoProps[]>([]);

  const [outlet, setOutlet] = useState('COLOMBO');

  const handleOutlet = () => {
    console.log('handle outlet');
    getOutletProducts(outlet).then((res) => {
      setProductData(res.data)
      console.log(res.data);

    })
  }


  useEffect(() => {
    getAllProducts().then((res) => setProductData(res.data));
  }, []);
  return (
    <>
      <div>

        <div className="flex flex-col justify-center mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 ">

          <div className="flex ml-6 items-center ">
            <span className="mr-3">Outlet</span>
            <div className="relative">
              <select onChange={(e) => {
                {
                  setOutlet(e.target.value);
                  console.log('e.target.value');
                  handleOutlet()
                }
              }} defaultValue='COLOMBO' className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-sky-700 text-base pl-3 pr-10">
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
       
          if (data.outlet == outlet) {
            
            return <ProductCard key={index} productData={data} />
          }
        })}
      </div>
    </>
  );

};
