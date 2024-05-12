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

// Register API
export const registerUserApi = (data) => Api.post("/api/user/create", data);

//http://localhost:5000/test
