import axios from "axios"
import { api } from "../constant"
import { User } from "../../app/types/user"

export const AddUser = (payload :User) => {
    return axios.post(api, payload)
  }
  