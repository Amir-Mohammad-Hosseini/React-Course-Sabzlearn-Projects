import axios from "axios"

export const customFetch = axios.create({
    baseURL : "https://shopino.iran.liara.run/v1/"
})