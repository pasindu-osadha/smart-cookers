import { Guid } from 'guid-typescript';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { addOrder } from '../../services/OrderService';
import { getOneProduct } from '../../services/ProductService';
import { OrderCreateDto, ProductProps, ProductResponse } from '../../types/Product.types';

export const ProductInfoCard = () => {

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const naviagte = useNavigate();

    var a: ProductResponse = {
        productInOutletId: Guid.create(),
        productId: Guid.create(),
        outletId: Guid.create(),
        product_Name: '',
        product_Description: '',
        product_UnitPrice: 1,
        avalable_Quantity: 0,
        product_Picture_Url: ''
    };

    const [productInfo, setProductInfo] = useState<ProductResponse>(a);
    const [productCount, setProductCount] = useState(0);
    const [totalAmount, settotalAmount] = useState(0);



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

    useEffect(() => {
        settotalAmount(productCount * productInfo?.product_UnitPrice);
    }, [productCount])


    const handleDecrement = () => {
        if (productCount > 0) {
            setProductCount(productCount - 1);

        }

    }

    const handleIncreament = () => {
        if (productCount < productInfo.avalable_Quantity) {
            setProductCount(productCount + 1)
        }
    }

    const handleOrderProcess = () => {
       // debugger
        var data: OrderCreateDto = {
            productInOutletId: productInfo?.productInOutletId,
            outletId: productInfo?.outletId,
            productId: productInfo?.productId,
            userId: user.ID,
            product_Order_Qty: productCount,
            totalAmount: totalAmount
        }

        addOrder(data).then(()=>{naviagte('/')});
    }


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
                            <h1 className="text-gray-700 font-bold text-xl">Available  Qty : {productInfo?.avalable_Quantity} </h1>
                            <h1 className="text-gray-700 font-bold text-xl">Total amount : {totalAmount} </h1>

                        </div>
                        <div>
                            <button className='px-3 py-2 bg-navbarColor text-white text-xs font-bold uppercase rounded' onClick={() => handleDecrement()} >-</button>
                            {productCount}
                            <button className='px-3 py-2 bg-navbarColor text-white text-xs font-bold uppercase rounded' onClick={() => handleIncreament()} >+</button>
                            &nbsp;&nbsp;&nbsp;
                            {user &&
                                <button className="px-3 py-2 bg-navbarColor text-white text-xs font-bold uppercase rounded" onClick={() => { handleOrderProcess() }}>Proced order</button>
                            }

                            {!user &&
                                <button className="px-3 py-2 bg-navbarColor text-white text-xs font-bold uppercase rounded" onClick={() => naviagte('/login')} >Proced order</button>
                            }


                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};
