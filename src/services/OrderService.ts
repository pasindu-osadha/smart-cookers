import axios from "axios";
import { Guid } from "guid-typescript";
import { useNavigate } from "react-router-dom";
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
         //   console.log(response);
            alert("Order complete sucessfully ");

            return response;
        })
        .catch(function (response) {
            //handle error
           // console.log(response);
            alert("Order is not completed, try again");
        });
};

export const getUserTransactionHistory = async (id: string) => {
  var result =   await axios.get(Base_URL + `/api/Order/getTrasnsactionHistory/${id}`);
  return result.data;
}