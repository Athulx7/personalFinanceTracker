import { baseURL } from "./baseURl"
import { commonApi } from "./commonAPI"

export const loginApi = async () => {
    return await commonApi('POST', `${baseURL}user/register`, '', '')
}

export const registerApi = async (formData) => {
    return await commonApi('POST', `${baseURL}user/register`, formData, '')
}