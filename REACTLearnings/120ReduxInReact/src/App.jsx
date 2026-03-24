import { useState } from 'react'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/features/counterSlice' 

import './App.css'
import Navbar from './components/Navbar'


function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>

    <Navbar />
Currently the count is {count}
    <div>
<button     onClick={() => dispatch(decrement())}>-</button>
    </div>
    <div>
<button         onClick={() => dispatch(increment())} >+</button>
    </div>
<div>
  
      <button onClick={()=>dispatch(multiply())}>*</button>
</div>
 </>
  )
}

export default App
