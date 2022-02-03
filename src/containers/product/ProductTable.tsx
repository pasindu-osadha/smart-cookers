import React, { useEffect, useState } from 'react';
import { ProductTableRow } from '../../components/product/ProductTableRow';
import { getAllProducts } from '../../services/ProductService';

export const ProductTable = () => {
    const [productsData, setProductData] = useState([]);

    useEffect(() => {
        getAllProducts().then((res) => setProductData(res.data))
    }, []);



    return (


        <div className="text-gray-900 bg-gray-200">
            <div className="p-4 flex">
                <h1 className="text-3xl">
                    Products
                </h1>
            </div>
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">Product Name</th>
                            <th className="text-left p-3 px-5">Description</th>
                            <th className="text-left p-3 px-5">Price</th>
                            <th className="text-left p-3 px-5">Avilable Qty</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {productsData.map(function (data, name) {
                            return <ProductTableRow key={name} productData={data} />;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
