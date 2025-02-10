import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import nav_logo from '../../assets/logo_big.png'
import nav_profile from '../../assets/profile_image.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="" alt={nav_logo} className='nav-logo' />
      <img src="" alt={nav_profile} className='nav-profile'/>
    </div>
  )
}

export default Navbar
