import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';



const api = 'https://61f91a50783c1d0017c44947.mockapi.io/';

export const getAllProducts = () => {
    return axios.get(api + 'product');
};

export const getOneProduct = (id?: string) => {
    return axios.get(api + 'product/' + id);
}


export const addProduct = async (data: any) => {
    await axios({
        method: 'post',
        url: api + 'product',
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