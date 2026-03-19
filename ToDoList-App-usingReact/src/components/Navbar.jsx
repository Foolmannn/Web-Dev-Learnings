import React from 'react'

const Navbar = () => {
  return (
    <div className='nav flex bg-amber-300 justify-between' >
    <div className="logo">
      <span className='font-bold text-3xl mx-8 mt-8 '>PlanWhatYouDo</span>
    </div>
    <ul className="flex list-none gap-10 mx-10 text-2xl">
      
        <li className='cursor-pointer hover:font-bold transition-all duration-75 '>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-75 '>Tasks</li>
      
    </ul>
    </div>
  )
}

export default Navbar
