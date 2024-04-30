import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddProduct() {
 const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [error, setError] = useState(false);
  const [image, setImage] = useState({ preview: '', data: '' })
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    company: "",
    category: "",
    
    
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  
  };


 
  const sendProductData = async (e) => {
    e.preventDefault();
  
    if (
      !product.productName ||
      !product.company ||
      !product.price ||
      !product.category 
    ) {
      setError(true);
      return false;
    }
    let formData = new FormData();
    formData.append("productName", product.productName);
    formData.append("company", product.company);
    formData.append("price", product.price);
    formData.append("file", image.data);
    formData.append("category", product.category);
    const headers = {
      // 'Content-Type': 'application/json',
      'x-auth':token
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:3007/api/product/add",formData,{headers}
        
      );
      if (response) {
        // alert("Product added successfully");
        setError(false)
        navigate("/product")
      } else {
        throw new Error("Error in adding the product");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setProduct({
      productName: "",
      price: "",
      company: "",
      category: ""
    });
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <form onSubmit={sendProductData}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Product Name</label>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Product Name"
            />
            {error && !product.productName && (
              <span className="error">Enter valid Name</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Price</label>
            <input
              type="Number"
              name="price"
              value={product.price}
              className="form-control"
              onChange={handleInputChange}
              placeholder="Enter Product Price"
            />
            {error && !product.price && (
              <span className="error">Enter valid Price</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Company</label>
            <input
              type="text"
              name="company"
              value={product.company}
              className="form-control"
              onChange={handleInputChange}
              placeholder="Enter Company Name"
            />
            {error && !product.company && (
              <span className="error">Enter valid Company Name</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              className="form-control"
              onChange={handleInputChange}
              placeholder="Enter Category"
            />
            {error && !product.category && (
              <span className="error">Enter valid Category</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Category</label>
            <input
              type="file"
              value={product.image}
              className="form-control"
              onChange={handleFileChange}
              placeholder="Upload File"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
