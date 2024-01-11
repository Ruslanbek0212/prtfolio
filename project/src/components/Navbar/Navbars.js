import React, { useState } from 'react';
import {menu} from '../../utilits/constants.js'
import './Navbar.css'

function Navbars(proms) {
  const [ activeLink, setActiveLink] = useState("")
  return (
    <nav>
        <a href="#!" className="logo">fintech.uz</a>
        <ul>
          {
            menu.map((element, value) => <li key = {value} className={activeLink === element? 'activeMenu': ''} onClick={()=> setActiveLink(element)}>{element}</li>)
          }
        </ul>
    </nav>
  )
}

export default Navbars