import axios from "axios";
import config from "../config";

const Http = axios.create({
  baseURL: config("API_URL"),
});

export function setAuthorization(token) {
  Http.defaults.headers["Authorization"] = `Bearer ${token}`;
}

if (localStorage.getItem("auth_token")) {
  setAuthorization(localStorage.getItem("auth_token"));
}

export default Http;
