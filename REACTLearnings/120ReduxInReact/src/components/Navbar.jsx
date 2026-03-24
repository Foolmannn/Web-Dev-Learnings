import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Navbar = () => {

      const count = useSelector((state) => state.counter.value)
    

  return (
    <div>
      I am a navbar . And the counter is {count}
{/* this is prop drilling which become highly inefficient when the large project becomes larger */}
    </div>
  )
}

export default Navbar
