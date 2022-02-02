import axios from 'axios';
import React from 'react';

const api = 'https://61f91a50783c1d0017c44947.mockapi.io/';

export const getAllProducts = () => {
    console.log(api + 'product');
    return axios.get(api + 'product');
};
