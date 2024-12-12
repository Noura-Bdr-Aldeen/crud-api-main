import axios from "axios";
import { api } from "../constant";
import { User } from "../../app/types/user";

export const UpdateUser = (payload: User) => {
  return axios.put(`${api}/${payload.id}`, payload);
};
