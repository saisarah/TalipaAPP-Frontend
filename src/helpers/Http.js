import axios from "axios";
import config from "../config";

const Http = axios.create({
  baseURL: config("API_URL"),
});

export function setAuthorization(token) {
  Http.defaults.headers["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("auth_token", token)
}

const isValidationError = (err) => (err?.response?.status === 422)
const isUnauthenticated = (err) => (err?.response?.status === 401)

export function getErrorMessage(error)
{
    if (error.response === null)
        return 'An unknown error occured'
    
    const { response } = error

    if (isValidationError(error))
        return response.data.message;
    
    if (isUnauthenticated(error))
        return response.data?.message || 'You are not authorized to perform this action'
    
    return response.data?.message || 'An unknown error occured'
}

if (localStorage.getItem("auth_token")) {
  setAuthorization(localStorage.getItem("auth_token"));
}

export default Http;

window.Http = Http;