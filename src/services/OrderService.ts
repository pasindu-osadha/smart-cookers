import axios from "axios";
import { Guid } from "guid-typescript";
import { useNavigate } from "react-router-dom";
import { Base_URL } from "../constants/global";



export const addOrder = async (data: any) => {
    const token = localStorage.getItem('userToken');
    await axios({
        method: 'post',
        url: Base_URL + '/api/Order/CreateOrder',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: data
    })
        .then(function (response) {
            //handle success
            alert("Order complete sucessfully ");

            return response;
        })
        .catch(function (response) {
            //handle error
            alert("Order is not completed, try again");
        });
};

export const getUserTransactionHistory = async (id: string) => {
    const token = localStorage.getItem('userToken');
    var result = await axios.get(Base_URL + `/api/Order/getTrasnsactionHistory/${id}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    return result.data;
}