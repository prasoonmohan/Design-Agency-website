import React from 'react'
import "../Header/Header.css"
import { GiHamburgerMenu } from 'react-icons/gi';
function Header() {
  return (
    <div className="header">
        <div className="logo"><span>design</span><br />
        agency</div>
        <div className="links">
            <li>Specialize in</li>
            <li>Case Study</li>
            <li>Process</li>
            <li>Industries</li>
        </div>
        <div className="hamburger">
          <GiHamburgerMenu />
        </div>
        <div className="buttons">
            <button className='call-button'>Schedule A Call</button>
            <button className='hire-button'>we are Hiring</button>
        </div>
        </div>
  )
}

export default Header