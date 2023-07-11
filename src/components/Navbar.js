import React from 'react'
import logoo from "../images/logoo.png"
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
        <div className="head-block">
            <img src={logoo} alt='logo' className='logo'/>
            . . . . . ╰──╮
        </div>
        <ul className='list'>
            <li>Home</li>
            <li>About us</li>
            <li>DodgEe</li>
            <li>Contact Us</li>

        </ul>
    </nav>
  )
}

export default Navbar
