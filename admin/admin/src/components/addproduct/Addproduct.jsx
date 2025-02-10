import React, { useEffect, useState } from "react";
import "./Addproduct.css";
import axios from "axios";
import upload_area from "../../assets/upload_area.png";
const Addproduct = () => {
  const [image, setImage] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    old_price: "",
    new_price: "",
  });
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product", image);
    formData.append("name", product.name);
    formData.append("new_price", product.new_price);
    formData.append("old_price", product.old_price);
    formData.append("category", product.category);

    //send image to API
    try {
      const response = await axios.post("http://localhost:5000/upload", formData);
      if (response.data.success) {;
        console.log("file name :", response.data.filename);
         
      };
      const respond=await axios.post("http://localhost:5000/addproduct",formData)
      if (respond.data.success) {
        console.log(respond.data.data);
        
      }
      else{
        console.log("error");
        
      } 
    } catch (error) {
      console.log("error :",error.message);
      
    }
    
  };
  return (
    <div className="add-product">
      <form onSubmit={ submitHandler}>
        <div className="addproduct-itemfield">
          <p>Product Title</p>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={changeHandler}
            placeholder="Type here"
            required
          />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input
              type="number"
              value={product.old_price}
              onChange={changeHandler}
              name="old_price"
              placeholder="Type here"
              required
            />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input
              type="number"
              value={product.new_price}
              onChange={changeHandler}
              name="new_price"
              placeholder="Type here"
              required
            />
          </div>
        </div>
        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select
            name="category"
            className="add-product-selector"
            value={product.category}
            onChange={changeHandler}
            required
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt=""
              className="addproduct-thumbnail"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name="image"
            id="image"
            hidden
            required
          />
        </div>
        <button className="addproduct-btn" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
