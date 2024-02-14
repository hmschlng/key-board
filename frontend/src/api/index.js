import axios from "axios";

let backendUrl = process.env.SERVER_URL;

function apiInstance() {
  const instance = axios.create({
    baseURL: backendUrl,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

export { apiInstance };