import { api } from "../constant";
import axios from "axios";

export default function deleteUserFn(userId : string) {
    return axios.delete(`${api}${userId}`)
}