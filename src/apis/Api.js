import axios from "axios";

// Creating Backend Config
const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Test API
export const testAPI = () => Api.get("/test");

// Register API
export const registerUserApi = (data) => Api.post("/api/user/create", data);

// Login API
export const loginUserApi = (data) => Api.post("/api/user/login", data);

// create product Api
export const createProductApi = (data) => Api.post("/api/product/create", data);

export const getProductsApi = () => Api.get("/api/product/get_all_products");

export const getSingleProductApi = (id) =>
  Api.get(`/api/product/get_single_product/${id}`);

export const deleteProduct = (id) =>
  Api.delete(`/api/product/delete_product/${id}`);

//http://localhost:5000/test
