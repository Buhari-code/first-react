import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa";
import './navbar.css'

function Navbar() {

    const [navbar, setNavbar] = useState(false)

    const handleNavbar = () => {
        setNavbar(!navbar)  
       document.body.classList.toggle('activeNavbar', navbar)
    }

  return (
    <div style={{display :'flex', justifyContent:'space-around'}}>
        
        <nav className={navbar ? 'activeNavbar' : 'nav'}>
            <Link to={'home'}>Home</Link>
            <Link to={'aboutus'}>About Us</Link>
            <Link to={'contact'}>Contact</Link>
        </nav>
        <button onClick={handleNavbar}><FaBars /></button>
        
    </div>
  )
}

export default Navbar
