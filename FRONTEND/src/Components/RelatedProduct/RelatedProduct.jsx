import React, { useContext } from 'react'
import './RelatedProduct.css'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'
const RelatedProduct = () => {
         const {data_product}=useContext(ShopContext)
  return (
    <div className='related-product'>
      <h1>Related Product</h1>
      <hr />
      <div className="related-product-item">
      {
               
               data_product.map((item, index) => {
               return(
                  <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
               )   
               })
               
      }
      </div>
    </div>
  )
}

export default RelatedProduct
