import axios from "axios";
import config from "../config";

const Http = axios.create({
  baseURL: config("API_URL"),
});

export function setAuthorization(token) {
  Http.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export function getErrorMessage(error)
{
    if (error.response === null)
        return 'An unknown error occured'
    
    const { status, response } = error

    if (status === 422)
        return response.data.message;
    
    if (status === 401)
        return response.data?.message || 'You are not authorized to perform this action'
    
    return response.data?.message || 'An unknown error occured'
}

if (localStorage.getItem("auth_token")) {
  setAuthorization(localStorage.getItem("auth_token"));
}

export default Http;

window.Http = Http;