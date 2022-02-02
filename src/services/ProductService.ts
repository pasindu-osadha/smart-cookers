import axios from 'axios';
import React from 'react';

const api = 'https://61f7e4bd39431d0017eafae7.mockapi.io/';

export const getAllProducts = () => {
    console.log(api + 'products');
    return axios.get(api + 'products');
};
