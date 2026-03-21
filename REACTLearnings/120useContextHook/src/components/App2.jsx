import { useState } from 'react'

import { counterContext } from '../context/context'


import Navbar2 from './Navbar2'

function App2() {
  const [count, setCount] = useState(0)

  return (
    <>
<counterContext.Provider value={{count , setCount}}> 
  {/* Proivide the context of the count and setCount fn */}

    <Navbar2 />


    {/* 
    here the heiarchy is :
    App.jsx
    Navbar.jsx
    Button.jsx
    component1.jsx */}

      <button onClick={()=>setCount((count)=>count+1)}>Count is {count}</button>

    </counterContext.Provider>
    </>
  )
}

export default App2
