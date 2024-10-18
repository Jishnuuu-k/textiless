import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='NavBar'>
      <div className="NavLogo">
        <h4>Lavender</h4>
      </div>
      <div className="NavOptions">
          <Link to="/" style={{textDecoration:'none'}}>
                 <div className="Options">Home</div>
          </Link>
          <Link to="about" style={{textDecoration:'none'}}>
                 <div className="Options">About Us</div>
          </Link>
       
        <div className="Options">Products</div>
        <div className="Options">Contact Us</div>
      </div>
    </div>
  )
}

export default Header