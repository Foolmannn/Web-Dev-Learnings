import React from 'react'
import Link from 'next/link' 
// this link components help in the avoiding the reload of the page while opening a new page 
//we can observe it as the page doesnot reload when you clikc on the link in navbar which is using the link component but the footer doesnot use it 

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-slate-800 text-white py-4 px-4 '>
        <div className="logo font-bold">Facebook</div>
        <ul className="flex gap-6">
       <Link href="/">
            <li> Home</li>
          </Link>
          <Link href="/about">
            <li> About</li>
          </Link>
          <Link href="/contact">
            <li> Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
