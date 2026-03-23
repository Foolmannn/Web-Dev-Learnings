// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='nav flex bg-primary justify-between p-5 font-bold ' >
//     <div className="logo">
//       <span className='font-bold text-3xl mx-8 mt-8 '>PlanWhatYouDo</span>
//     </div>
//     <ul className="flex list-none gap-12 mx-10 text-2xl   ">
      
//         <li className='cursor-pointer hover:font-extrabold transition-all duration-75 '>Home</li>
//         <li className='cursor-pointer hover:font-extrabold transition-all duration-75 '>Tasks</li>

      
//     </ul>
//     </div>
//   )
// }


// export default Navbar

import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/todoo.png";


function Navbar() {
  return (
    <nav className="flex gap-6 pb-0 p-4 bg-violet-500 text-3xl text-white font-bold  justify-between ">
      <div className="logo  mx-30 "><img src={logoImg} alt="" srcset="" width={75}/></div>
      <div className="links flex gap-15 mr-50 ">

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-300" : ""
      }
      >
        Home
      </NavLink>

      <NavLink
        to="/tasks"
        className={({ isActive }) =>
          isActive ? "text-yellow-300" : ""
      }
      >
        Tasks
      </NavLink>
        </div>
    </nav>
  );
}

export default Navbar;