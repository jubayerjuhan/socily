import axios from "axios";
<<<<<<< HEAD
import { getLocalstorageData } from "./localstorage_func.ts";

// const rootLocalstorage = JSON.parse(localStorage.getItem("persist:root"));
// const user = JSON.parse(rootLocalstorage?.user);
const token = getLocalstorageData("jwtToken");

export const client = axios.create({
  baseURL: "http://192.168.0.106:5000/api",
  headers: {
    authorization: `Bearer ${token ? token : ""}`,
  },
=======

export const client = axios.create({
  baseURL: "http://192.168.0.106:5000/api",
>>>>>>> 1148e39152abdd89b9b3dee19d92480d056df1f7
});
