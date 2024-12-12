import { api } from "../constant"
import axios from "axios"

export const fetchUsers = (pageNumber: number) => {
    return axios.get(`${api}?_limit=5&_page=${pageNumber}`);
}