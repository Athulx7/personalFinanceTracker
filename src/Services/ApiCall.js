import { baseURL } from "./baseURl"
import { commonApi } from "./commonAPI"

export const loginApi = async (formData) => {
    return await commonApi('POST', `${baseURL}user/login`, formData, '')
}

export const registerApi = async (formData) => {
    return await commonApi('POST', `${baseURL}user/register`, formData, '')
}