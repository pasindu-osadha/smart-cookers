import axios from 'axios';
import { Guid } from 'guid-typescript';
import React from 'react';
import { Link } from 'react-router-dom';
import { Base_URL } from '../constants/global';


export const getAllProducts = async () => {
    const token = localStorage.getItem('userToken');
    var result = await axios.get(Base_URL + '/api/Product/AllProduct',
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    return result;
};

export const getOneProduct = async (id?: string) => {
    const token = localStorage.getItem('userToken');
    var result = await axios.get(Base_URL + '/api/Product/GetProductInOutletItem/' + id,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    return result;
}


export const addProduct = async (data: any) => {
    const token = localStorage.getItem('userToken');
    await axios({
        method: 'post',
        url: Base_URL + '/api/Product/AddProduct',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: data
    })
        .then(function (response) {
            //handle success
            // console.log(response);

            return response;


        })
        .catch(function (response) {
            //handle error
            // console.log(response);
        });
};

export const deleteProduct = async (id: Guid) => {
    const token = localStorage.getItem('userToken');
    await axios.delete(Base_URL + 'product/' + id,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
}

export const getOutletProducts = (outletName: string) => {
    const token = localStorage.getItem('userToken');
    var result = axios.get(Base_URL + '/api/Product/GetProductInOutlet/' + outletName,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    return result;
}