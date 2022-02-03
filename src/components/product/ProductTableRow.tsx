import React from 'react';
import { ProductProps } from '../../types/Product.types';

export const ProductTableRow = (props: ProductProps) => {
    return (

        <tr className="border-b hover:bg-[#badfe7] bg-gray-100">
            <td className="p-3 px-5">{props.productData.name}</td>
            <td className="p-3 px-5">{props.productData.description}</td>
            <td className="p-3 px-5">{props.productData.price}</td>
            <td className="p-3 px-5">{props.productData.qty}</td>
            <td className="p-3 px-5 flex justify-end">
                <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
        </tr>
    );
};
