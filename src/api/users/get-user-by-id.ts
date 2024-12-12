import { api } from "../constant"
import axios from "axios"

export const fetchUserById = async (userId : string) => {
    try {
        const response = await axios.get(`${api}/${userId}`, {
            responseType: 'json'
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}