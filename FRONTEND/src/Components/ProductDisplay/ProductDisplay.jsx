import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
 const {addToCart}= useContext(ShopContext)
         const {product}=props
  return (
    <div className='productDisplay'>
      <div className="productDisplay-left">
      <div className="productDisplay-img-list">
      <img src={product.image} alt="" /> 
      <img src={product.image} alt="" /> 
      <img src={product.image} alt="" /> 
      <img src={product.image} alt="" /> 
      </div>
      <div className="productDisplay-main-img">
      <img src={product.image} alt="" /> 
      </div>
      </div>
      <div className="productDisplay-right">
      <h1>{product.name}</h1>
      <div className="productDisplay-right-stars">
      <img src={star_icon} alt="" />
      <img src={star_icon} alt="" />
      <img src={star_icon} alt="" />
      <img src={star_icon} alt="" />
      <img src={star_dull_icon} alt="" />
      <p>(122)</p>
      </div>
      <div className='productDisplay-right-prices'>
      <div className='productDisplay-right-old-price'>${product.old_price}</div>
        <div className='productDisplay-right-new-price'>${product.new_price}</div>
      </div>
      <div className='productDisplay-right-description'>
        A lightweight,usually knitted,pullover shirt,close fighting and and with round neckline and short sleeves,worn as undershirt or outer garment.
      </div>
      <div className='productDisplay-right-size'>
        <h1>Select Size</h1>
        <div className="productDisplay-right-sizes">
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
        </div>
      </div>
      <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      <div className="productDisplay-right-category">
      <p><span>Category </span>:{product.category},T-Shirt Crop Top</p>
      <p><span>Tags </span>:Modern,Latest</p>
      </div>
      </div>

    </div>
  )
}

export default ProductDisplay
