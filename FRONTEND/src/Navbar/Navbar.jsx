import React, { useContext, useState,useRef } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../assets/dropdown_icon.png'
const Navbar = () => {
  const [menu,setMenu]=useState("shop")
  const { getTotalCartItems}=useContext(ShopContext)
  const menuRef=useRef()
  const dropdown_toggle=(e)=>{
    menuRef.current.classlist.toggle("nav-menu-visible")
    e.target.classlist.toggle("open")
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <NavLink to={'/'}><img src={logo} alt="" />
        <p>Shopper</p>
        </NavLink>
      </div>
      <img className="nav-dropdown" onClick={dropdown_toggle} src={dropdown_icon} alt="" />
      <ul ref={menuRef} className="nav-menu">
          <li onClick={()=>setMenu("shop")}><NavLink to={'/shop'} style={{textDecoration:"none",color:"inherit"}}>Shop </NavLink> {menu==="shop"?<hr />:<></>}</li >
          <li onClick={()=>setMenu("men")}><NavLink to={'/men'} style={{textDecoration:"none",color:"inherit"}}>Men </NavLink> {menu==="men"?<hr />:<></>}</li >
          <li onClick={()=>setMenu("women")}><NavLink to={'/women'} style={{textDecoration:"none",color:"inherit"}}>Women </NavLink> {menu==="women"?<hr />:<></>}</li >
          <li onClick={()=>setMenu("kid")}><NavLink to={'/kid'} style={{textDecoration:"none",color:"inherit"}}>Kid </NavLink> {menu==="kid"?<hr />:<></>}</li >
        </ul>
        <div className="nav-login-cart">
          <button> <NavLink to={'/login'} style={{textDecoration:"none",color:"inherit"}}>Login</NavLink> </button>
         <NavLink to={'/cart'}><img src={cart_icon} alt="" /></NavLink>
          <div className="nav-cart-count">{getTotalCartItems()}
          </div>
        </div>
    </div>
  );
};

export default Navbar;
