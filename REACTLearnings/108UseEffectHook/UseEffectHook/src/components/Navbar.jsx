import { useEffect } from "react"
import React  from 'react'


const Navbar = ({color}) => {

      // Case 1 : Run on every render 
      useEffect(() => {
        alert("Hey i will run on every render ");
      }); 
    
      // Case 2 : Run on First render 
    
      useEffect(() => {
        alert("Hey welcome to this page ");
      }, []); // useEffect is the react hook . it runs the function and takes the array which is the trigger point ie when the array is changed it trigger the useeffect 
      // here [] empty array means on every reload it runs 
    
    // Case 3: Run only when certain value change 
    
      useEffect(() => {
        alert("Hey this is running because color was changed ");
      }, [color]); // this triggers when the count is changed
    

    
      //Example of the CLeanup functions 
    
      useEffect(() => {
        alert(" This is the first render of the app.jsx")
        return ()=>{
          // this return function is optional and it is the cleanup code for ex. if the navbar is unmounted  
          alert("Component was unmounted")
        }
      }, [])
  return (
    <div>
      This is of the color  {color}  .
    </div>
  )
}

export default Navbar
