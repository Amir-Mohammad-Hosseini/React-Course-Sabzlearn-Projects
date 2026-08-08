import { customFetch } from "../../lib/Axios/axios"

export const sendContactForm =async (contactDatas) => {
 const {data} = await customFetch.post("contact-us/" , contactDatas)
 return data
}