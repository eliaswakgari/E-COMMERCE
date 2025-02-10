import React from 'react'
import './LoginSignUp.css'
const LoginSignUp = () => {
  return (
    <div className="loginSignUp">
      <div className="loginSignUp-container">
      <h1>Sign Up</h1>
      <div className="loginSignUp-fields">
      <input type="text" placeholder='your name' required/>
      <input type="email" placeholder='Email Address' required/>
      <input type="password" placeholder='password' required/>
      </div>
      <button>Continue</button>
      <p className="loginSignUp-login">Already have an Account?<span>Login Here</span></p>
      <div className="loginSignUp-agree">
      <input type="checkbox" name="" id="" />
      <p>By continuing,i agree to the terms of use and privacy policy.</p>
      </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp
