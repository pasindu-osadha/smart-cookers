import axios from 'axios';
import { Guid } from 'guid-typescript';
import React from 'react';
import { Link } from 'react-router-dom';
import { Base_URL } from '../constants/global';



//const api = 'https://61f91a50783c1d0017c44947.mockapi.io/product';

export const getAllProducts = async () => {

    var result = await axios.get(Base_URL + '/api/Product/AllProduct');
    //  var result = await axios.get(api);
    console.log(result);
    console.log(result.data);
    return result;
};

export const getOneProduct = async (id?: string) => {
    var result = await axios.get(Base_URL + '/api/Product/GetProduct/' + id);
    console.log(result);
    console.log(result.data);
    return result;
}


export const addProduct = async (data: any) => {
    await axios({
        method: 'post',
        url: Base_URL + '/api/Product/AddProduct',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
        .then(function (response) {
            //handle success
            console.log(response);

            return response;


        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
};

export const deleteProduct = async (id: Guid) => {
    await axios.delete(Base_URL + 'product/' + id);
}

export const getOutletProducts = (outletName: string) => {
    var result = axios.get(Base_URL + '/api/Product/AllProduct');
    console.log(result);
    return result;
}