import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { getUserTransactionHistory } from '../../services/OrderService';
import { TransactionHistoryDto } from '../../types/Product.types';

export const UserTransaction = () => {

    const [transaction, settransaction] = useState<TransactionHistoryDto>([])

    const { user } = useContext(AuthContext);
    useEffect(() => {
        getUserTransactionHistory(user.ID).then((res) => {
            // console.log(res)
            settransaction(res);
        })

    }, [])

    return (

        <div className='h-screen'>
            <div className="text-gray-900 bg-gray-200">
                <div className="p-4 flex">
                    <h1 className="text-3xl">
                        Transaction History
                    </h1>
                </div>
                <div className="px-3 py-4 flex justify-center">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <thead>
                            <tr className="border-b">

                                <th className="text-left p-3 px-5">Order Date</th>
                                <th className="text-left p-3 px-5">Product Name</th>
                                <th className="text-left p-3 px-5">Product Qty</th>
                                <th className="text-left p-3 px-5">Total Amount</th>
                                <th className="text-left p-3 px-5">Outlet Name</th>
                                <th className="text-left p-3 px-5">Order Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {transaction.map((item, index) => {

                                return (
                                    <tr className="border-b hover:bg-[#badfe7] bg-gray-100">

                                        <td className="p-3 px-5">{item.order_Date}</td>
                                        <td className="p-3 px-5">{item.productName}</td>
                                        <td className="p-3 px-5">{item.productQty}</td>
                                        <td className="p-3 px-5">{item.totalAmount}</td>
                                        <td className="p-3 px-5">{item.outletName}</td>
                                        <td className="p-3 px-5">{item.order_Status}</td>
                                    </tr>
                                );

                            })}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

