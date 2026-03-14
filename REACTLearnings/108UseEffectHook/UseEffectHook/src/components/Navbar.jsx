import { useEffect } from "react"
import React  from 'react'


const Navbar = ({color}) => {
    useEffect(() => {
    
    alert("Color was changed ")

    }, [color])
    
  return (
    <div>
      This is of the color  {color}  .
    </div>
  )
}

export default Navbar
