import axios from "axios";
import config from "../config";
import Cache from "./Cache";

const auth_token = Cache.get("auth_token");

const Http = axios.create({
  baseURL: config("API_URL"),
  headers: {
    Authorization: auth_token && `Bearer ${auth_token}`,
  },
});

export function setAuthorization(token) {
  Http.defaults.headers["Authorization"] = `Bearer ${token}`;
  Cache.set("auth_token", token);
}

export function clearAuthorization() {
  Http.defaults.headers["Authorization"] = undefined;
  Cache.remove("auth_token");
}

export function hasAuthorization() {
  return Http.defaults.headers["Authorization"];
}

const isValidationError = (err) => err?.response?.status === 422;
const isUnauthenticated = (err) => err?.response?.status === 401;

export function getErrorMessage(error) {
  if (error.response === null) return "An unknown error occured";

  const { response } = error;

  if (isValidationError(error)) return response.data.message;

  if (isUnauthenticated(error))
    return (
      response.data?.message || "You are not authorized to perform this action"
    );

  return response.data?.message || "An unknown error occured";
}

export default Http;
