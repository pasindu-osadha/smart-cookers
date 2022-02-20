import axios from "axios";
import { Base_URL } from "../constants/global";

export const getUserDetails = async (id?: string) => {
    var result = await axios.get(Base_URL + '/GetuserDetailsById/' + id);
    console.log(result);
    console.log(result.data);
    return result;
}