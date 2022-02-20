
// export type ProductProps = {
//     productData: {
//         id:number,
//         name: string,
//         description: string,
//         url: string,
//         price:number,
//         qty:number,
//         outlet:string
//     };
//   };

import { Guid } from "guid-typescript";

export type ProductProps = {
    productData: {
        productInOutletId: Guid,
        productId: Guid,
        outletId: Guid,
        product_Name: string,
        product_Description: string,
        product_UnitPrice: number,
        product_Quantity: number,
        product_Picture_Url: string,

    }
};

export type ProductResponse = {
    productInOutletId: Guid,
    productId: Guid,
    outletId: Guid,
    product_Name: string,
    product_Description: string,
    product_UnitPrice: number,
    avalable_Quantity: number,
    product_Picture_Url: string
}

export type ProductCreateDto = {
    product_Name: string,
    product_Description: string,
    product_UnitPrice: number,
    product_Quantity: number,
    product_Picture_Url: string
}

export type OrderCreateDto = {
    productInOutletId: Guid,
    productId: Guid,
    outletId: Guid,
    userId: string,
    product_Order_Qty: number,
    totalAmount: number
}