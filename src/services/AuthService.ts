import axios from 'axios';
import { Base_URL } from '../constants/global';


//var url = 'https://localhost:44357/api/AuthManagement/';
//var url = 'https://localhost:7080/api/Auth/login';

export const submitLoginData = async (data: any) => {
    await axios({
        method: 'post',
        withCredentials: true,
        url: Base_URL + '/api/Auth/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
        .then(function (response) {

            console.log(response)
            localStorage.setItem('userToken', JSON.stringify(response.data.token));

            console.log(response.data.token);
            return response;
        })
        .catch(function (response) {
            //handle error
            console.log(response);
            window.location.reload();
            window.alert('Invalid username or password');
        });
};


const logout = () => {
    localStorage.removeItem('userToken');
    return axios.post(Base_URL + '/logout').then((response) => {
        return response.data;
    });
};

const getCurrentUser = () => {
    return localStorage.getItem('userToken');
};