import React, { useContext } from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'
 
const Footer = () => {
       
  return (
    <div className='footer'>
      <div className="footer-logo">
      <img src={footer_logo}alt="" />
      <p>SHOPPER</p>
      </div>
     <ul className="footer-link">
         <li>COMPANY</li>
         <li>PRODUCTS</li>
         <li>OFFICES</li>
         <li>ABOUT</li>
         <li>CONTACT</li>
     </ul>
     <div className="footer-social-icon">
         <div className="footer-icons-container">
         <img src={instagram_icon} alt="" />
         </div>
         <div className="footer-icons-container">
         <img src={pintester_icon} alt="" />
         </div>
         <div className="footer-icons-container">
         <img src={whatsapp_icon} alt="" />
         </div>
     </div>
     <div className="footer-copyright">
     <hr />
     
     <p>Copyright @2025-All Rights Reserved</p>
     </div>
    </div>
  )
}

export default Footer
