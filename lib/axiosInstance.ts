"use server";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://farah-studio.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
