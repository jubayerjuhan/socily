import axios from "axios";

export const client = axios.create({
  baseURL: "http://192.168.0.106:5000/api",
});
