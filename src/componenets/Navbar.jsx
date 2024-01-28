import React, { useState } from 'react';

import {Link, NavLink} from 'react-router-dom'

import './Navbar.css'


const Navbar = () => {
    const [menuOpen, setmenuOpen]=useState(false)
    const navITems = ["About", "services", "Contact"]
  return (
    <div>
      <nav >
        <Link to={"/"} className='title'>website</Link>
        <div className='menu' onClick={()=> setmenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>

        </div>
        <ul className={ menuOpen ? "open": ""}>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to={"/Services"}>Services</NavLink></li>

            <li><NavLink to={"/Contact"}>Contact</NavLink></li>

        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
