import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
const CartItem = () => {
  const { cartItem, all_product, removeFromCart ,getTotalCartAmount, getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="cart-item">
      <div className="cartitems-format main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item, index) => {
        if (cartItem[item.id] > 0) {
          return (
            <div className="container">
              <div className="cartitems-format">
                <img
                  src={item.image}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <p>{cartItem[item.id]}</p>
                <p>${item.new_price * cartItem[item.id]}</p>
                <p
                  className="remove"
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                >
                  X
                </p>
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="cart-items-down">
        <div className="cart-item-total">
          <div className="cart-items-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-items-item">
            <p>Shipping fee</p>
            <p>Free </p>
          </div>
          <hr />
          <div className="cart-items-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          <hr />
          <div className="cart-items-item">
            <h3>Total Quantity</h3>
            <h3>{ getTotalCartItems()}</h3>
          </div>
          <hr />
        </div>
      </div>
      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default CartItem;
