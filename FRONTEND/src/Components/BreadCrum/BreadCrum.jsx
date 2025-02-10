import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../../assets/breadcrum_arrow.png'
const BreadCrum = (props) => {
         const {product} =props
  return (
    <div className='breadCrum'>
      Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon}alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name} <img src={arrow_icon} alt="" />
    </div>
  )
}

export default BreadCrum
