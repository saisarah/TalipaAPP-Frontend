import axios from "axios";
import config from "../config";

const Http = axios.create({
    baseURL: config('API_URL')
})

export function setAuthorization(token)
{
    Http.defaults.headers['Authorization'] = `Bearer ${token}`
}

export default Http