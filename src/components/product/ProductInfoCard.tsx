import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../services/ProductService';

type ProductinfoProps = {

    id: string,
    name: string,
    description: string,
    url: string,
    price: number,
    qty: number
}

export const ProductInfoCard = () => {

    const { id } = useParams();
    console.log(id);

    const [productInfo, setProductInfo] = useState<ProductinfoProps | undefined>();

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
                <div className="  w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">

                    <div className=" p-4">
                        <h1 className="text-gray-900 font-bold text-2xl">{productInfo?.name} </h1>
                        <img className="rounded-t-lg" src={productInfo?.url} alt="" />
                        <p className="mt-2 text-gray-600 text-lg">{productInfo?.description}</p>
                        {/* <div className="flex item-center mt-2">
                            <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                        </div> */}
                        <div className="flex item-center justify-between mt-3">
                            <h1 className="text-gray-700 font-bold text-xl">Unit Price : Rs. {productInfo?.price} </h1>
                            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Pay</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>);
};
