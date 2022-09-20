import axios from "axios";
import { getLocalstorageData } from "./localstorage_func.ts";

// const rootLocalstorage = JSON.parse(localStorage.getItem("persist:root"));
// const user = JSON.parse(rootLocalstorage?.user);
const token = getLocalstorageData("jwtToken");

export const client = axios.create({
  baseURL: "http://192.168.0.106:5000/api",
  headers: {
    authorization: `Bearer ${token ? token : ""}`,
  },
});
