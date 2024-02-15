import axios from "axios";

function apiInstance() {
  const instance = axios.create({
    baseURL: "https://key-board.o-r.kr:8080",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

export { apiInstance };
