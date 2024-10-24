import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p>Subscribe to our newsletter and stay updated!</p>
      <div className='email-input'>
        <input type="email" placeholder='Enter Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter