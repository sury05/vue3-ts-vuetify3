import axios, { AxiosInstance } from "axios";

const APP_BASE_URL = "http://localhost:8080/api/";
const options = {};

function create(url: string, options = {}): AxiosInstance {
  return axios.create(Object.assign({ baseURL: url }, options));
}

const whitelist = create(`${APP_BASE_URL}/whitelist`);

export { whitelist };
