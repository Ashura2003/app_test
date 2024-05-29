import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createProductApi, getProductsApi } from "../../apis/Api";

const AdminDashboard = () => {
  // State for  input fields
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");

  // State for image file
  const [productImage, setProductImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  // State for product list
  const [products, setProducts] = useState([]); //array

  // Call API initially to fetch all products
  useEffect(() => {
    // Call the API
    getProductsApi()
      .then((res) => {
        // Response from the API

        // response : res.data.products (All products)
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(products);
  // Image Upload Handler
  const handleImage = (event) => {
    const file = event.target.files[0];
    setProductImage(file); // For storing the file in Backend
    setPreviewImage(URL.createObjectURL(file)); // For previewing the image
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a form data object
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productCategory", productCategory);
    formData.append("productDescription", productDescription);
    formData.append("productImage", productImage);

    // Make an Api call
    createProductApi(formData)
      .then((res) => {
        // For Suceessful API connection
        if (res.status === 201) {
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        // For Error in API Connection
        if (error.response) {
          if (error.response.status === 400) {
            toast.warning(error.response.data.message);
          } else if (error.response.status === 500) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Something went wrong");
          }
        } else {
          toast.error("Something went wrong");
        }
      });
  };

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between">
        <h3>Admin Dashboard</h3>

        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Product
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Create a new product
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form action="">
                  <label>Product Name </label>
                  <input
                    onChange={(e) => setProductName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Name"
                  />

                  <label className="mt-2">Product Price </label>
                  <input
                    onChange={(e) => setProductPrice(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder="Enter Product Price"
                  />

                  <label className="mt-2">Choose Product Category</label>
                  <select
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="form-control"
                  >
                    <option value="plants">Plants</option>
                    <option value="electronics">Electronics</option>
                    <option value="gadgets">Gadgets</option>
                    <option value="furniture">Furniture</option>
                  </select>

                  <label className="mt-2">Enter Description</label>
                  <textarea
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="form-control"
                  ></textarea>

                  <label className="mt-2">Upload Product Image</label>
                  <input
                    onChange={handleImage}
                    type="file"
                    className="form-control"
                  />

                  {/** Image Preview */}
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="preview image"
                      className="img-fluid rounded mt-2"
                    />
                  )}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <table className="table mt-2">
        <thead className="table-dark">
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((singleProduct) => (
            <tr>
              <td>
                <img
                  width={"40px"}
                  height={"40px"}
                  src={`http://localhost:5000/products/${singleProduct.productImage}`}
                  alt=" "
                />
              </td>
              <td>{singleProduct.productName}</td>
              <td>{singleProduct.productPrice}</td>
              <td>{singleProduct.productCategory}</td>
              <td>{singleProduct.productDescription}</td>
              <td>
                <button className="btn btn-primary"> Edit</button>
                <button className="btn btn-danger ms-2"> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
