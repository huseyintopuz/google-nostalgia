import React from 'react';
import "./getGoogle.css"

const GetGoogle = () => {
  return (
    <div className='get-google'>
      <span>Get Google!</span>
      <span>updates monthly:</span>
      <input placeholder="your e-mail" />
      <div>
        <button className='get-subscribe'>Subscribe</button>
        <a href="">Archive</a>
      </div>
    </div>
  )
}

export default GetGoogle