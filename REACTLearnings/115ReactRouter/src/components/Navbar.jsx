import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
                {/* <Link to="/">Home</Link>
                 */}
                 {/* Navlink allows us to use the class with the functions . This below gives the class red when the conditions is full fllled */}
                 <NavLink className={(e)=>{return e.isActive? "red":""}} to="/">Home</NavLink>
                </li>
            <li>
                <NavLink className={(e)=>{return e.isActive? "red":""}} to="/about">About</NavLink>
                </li>
        
            <li>
                 <NavLink className={(e)=>{return e.isActive? "red":""}} to="/login">Log In</NavLink>
                </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
