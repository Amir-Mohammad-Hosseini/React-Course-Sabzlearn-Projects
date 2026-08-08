import { customFetch } from "../../lib/Axios/axios"

export const sendOtp = async(authDatas) => {
    const {data} = await customFetch.post("auth/send" , authDatas)
    return data
}
export const sendVerifyOtp = async(authDatas) => {
    const {data} = await customFetch.post("auth/verify" , authDatas)
    return data
}