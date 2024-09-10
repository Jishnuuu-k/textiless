import React from 'react'
import './header.css'
function Header() {
  return (
    <div className='Header'>
        <div className="HeaderPart1">
            <h1>TEXTILE.PRO</h1>
        </div>
        <div className="HeaderPart2">
           <div className="Boxnum1">
                <div className="BoxinsideBoxnum1"></div>
                <div className="BoxinsideBoxnum2"></div>
           </div>
           <div className="Boxnum2">
                <div className="HeaderOption">Home</div>
                <div className="HeaderOption">About Us</div>
                <div className="HeaderOption">Products</div>
                <div className="HeaderOption">Contact Us</div>
           </div>
           <div className="Boxnum1">
                <div className="BoxinsideBoxnum1"></div>
                <div className="BoxinsideBoxnum2"></div>
           </div>
        </div>
    </div>
  )
}

export default Header