import axios from "axios";

// Creating Backend Config
const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Test API
export const testAPI = () => Api.get("/test");

//http://localhost:5000/test