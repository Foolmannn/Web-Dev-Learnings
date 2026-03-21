import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'


const Component2 = ({count}) => {
    const counter = useContext(counterContext)
  return (
    <div>
      This is count in component2 :{counter.count}
    </div>
  )
}

export default Component2
