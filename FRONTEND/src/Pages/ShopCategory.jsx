import React, { useContext } from "react";
import "./ShopCategory.css";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext.jsx";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexShort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shopCategorySort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-product">
      
      {all_product.map((item, index) => {
        if (props.category===item.category) {
         return(
           <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
         ) 
        }
        else{
          return null
        }
      })}
      
      </div>
      <div className="shopCategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
