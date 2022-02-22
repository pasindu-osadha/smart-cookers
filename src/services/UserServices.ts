import axios from "axios";
import { Base_URL } from "../constants/global";

export const getUserDetails = async (id?: string) => {
    const token = localStorage.getItem('userToken');
    var result = await axios.get(Base_URL + '/GetuserDetailsById/' + id, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return result;
}