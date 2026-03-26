// "use client"

// as next js is fullstact framework so this is how you create the client side components
// it is neccessary to use the client components safely as the sensative logi data reading should not be done and available in the client side 


// in next everycomponent is server component so we need 
// to convert them to client component
//here navbar is the client component which is embedded with thte server one 
import Navbar from "@/components/Navbar"


// import { useState } from "react"
// import { useEffect } from "react"

import fs from "fs/promises"
import { Nabla } from "next/font/google"





export default async function Home() {
  // const [count, setcount] = useState(0) //this without the useclient it will not work as without it the usestate and useeffect is not allowed in the server side as the page is getting run at the server by default 
  console.log("Hey hi") //without the client conversion this logs to the server 
//these will not run in client as these run in only the server 
  let a= fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})


  // Read file
  const file = await fs.readFile("data.json", "utf-8");

  // Convert JSON string → JS object
  const data = JSON.parse(file);
  
  return (
//
<>
<Navbar />
<div>

  {/* Count value is {count} */}
</div>
<div>
  <h1>Data from JSON:</h1>
          {data.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.age}</p>
          </div>
      ))}
</div>
{/* <div>
  <button onClick={()=>setcount(count+1)}>Click</button>
</div> */}
</>
  );
}
