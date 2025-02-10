import React, { createContext, useState } from 'react'
import all_product from '../assets/all_product'
import data_product from '../assets/data'
export const ShopContext=createContext(null)
const getDefaultCart=()=>{
  let cart={}
  for (let index = 0; index < all_product.length; index++) {
 cart[index]=0
   
  }
  return cart
}
console.log(getDefaultCart());

const ShopContextProvider = ({children}) => {
  const [cartItem,setCartItem]=useState(getDefaultCart())
         const addToCart=(itemId)=>{
           setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
           console.log(cartItem);
           
         }
         const removeFromCart=(itemId)=>{
           setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
           console.log(cartItem);
           
         }
        const getTotalCartAmount=()=>{
          let totalAmount=0
          for (const item in cartItem) {
            if (cartItem[item]>0) {
             const itemInfo=all_product.find((product)=>product.id===Number(item))
              totalAmount+=itemInfo.new_price*cartItem[item]
              //total=newPrice*quantity
              //cartItem=individual Object in Array.[item] is key and cartItem[item] is value
            }
          }
          return totalAmount
        }
       const getTotalCartItems=()=>{
          let totalItem=0
          for (const item in cartItem) {
            if (cartItem[item]>0) {
              totalItem+=cartItem[item]
              
            }
          }
          return totalItem
        }
         const contextValues={
          all_product,data_product,cartItem,addToCart,removeFromCart,getTotalCartAmount, getTotalCartItems
         }
  return (
   <ShopContext.Provider value={contextValues}>
   {children}
   </ShopContext.Provider>
  )
}

export default ShopContextProvider
