import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import order_icon from "../../assets/order_icon.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={order_icon} alt="" />
          <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{ textDecoration: "none" }} >
        <div className="sidebar-item">
          <img src={order_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
