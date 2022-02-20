import axios from "axios";
import { Base_URL } from "../constants/global";

export const addOrder = async (data: any) => {
    await axios({
        method: 'post',
        url: Base_URL + '/api/Order/CreateOrder',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
        .then(function (response) {
            //handle success
            console.log(response);
            alert("Order complete sucessfully ");

            return response;


        })
        .catch(function (response) {
            //handle error
            console.log(response);
            alert("Order is not completed, try again");
        });
};