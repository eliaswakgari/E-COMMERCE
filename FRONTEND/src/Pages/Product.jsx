import React, { useContext } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrum/BreadCrum.jsx";
import { ShopContext } from "../Context/ShopContext.jsx";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx";
import Description from "../Components/Description/Description.jsx";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct.jsx";
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId)); //find() is commonly used when you need to retrieve an object or value from an array based on a specific condition, like finding a user by their ID or finding a product by its name.
  // product Contain individual object in the all_product array based on their id

  return (
    <div>
      <BreadCrum product={product} />;
      <ProductDisplay product={product} />;
      <Description/>
      <RelatedProduct/>
    </div>
  );
};

export default Product;
