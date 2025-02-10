import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL </h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
      <input type="email" name="email" placeholder='Your email id'/>
      <button>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default NewsLetter
