import { Guid } from 'guid-typescript';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../services/ProductService';
import { ProductProps, ProductResponse } from '../../types/Product.types';

export const ProductInfoCard = () => {

    const { id } = useParams();
    console.log(id);

    const [productInfo, setProductInfo] = useState<ProductResponse | undefined>();

    useEffect(() => {

        getOneProduct(id)
            .then((res: any) => {
                setProductInfo(res.data);
                console.log(res.data);
                console.log(productInfo);
            })
            .catch(err => {
                console.log(err);
            });

    }, []);

    return (
        <div className='h-full'>
            <div className="w-full justify-center flex m-4 ">
                <div className="  w-1/2 bg-white shadow-lg rounded-lg overflow-hidden mb-44">

                    <div className=" p-4">
                        <h1 className="text-gray-900 font-bold text-2xl">{productInfo?.product_Name} </h1>
                        <img className="rounded-t-lg max-h-96" src={productInfo?.product_Picture_Url} alt="" />
                        <p className="mt-2 text-gray-600 text-lg">{productInfo?.product_Description}</p>
                        <div className="flex item-center justify-between mt-3">
                            <h1 className="text-gray-700 font-bold text-xl">Unit Price : Rs. {productInfo?.product_UnitPrice} </h1>
                            <button className="px-3 py-2 bg-navbarColor text-white text-xs font-bold uppercase rounded">Proced order</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>);
};
