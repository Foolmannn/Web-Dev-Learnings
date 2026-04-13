import Image from "next/image";
import fs from "fs/promises";
import {submitAction} from "@/actions/form.js"

export default function Home() {
// const submitAction = async (e)=>{
//   //this is how we use the server actions 
//   "use server"
//   console.log(e.get("username"), e.get("address")) /// this is how to get the data from the form like in php 
//   fs.writeFile("write.txt",  ` Hey, ${e.get("username")} your address is ${e.get("address")} `)
// } //these actions are generally written in separate file 

  return (
    <>
      <div className="w-2/3 mx-auto my-12 ">
        <form action={submitAction}>
          <div>
            <label htmlFor="username">Name</label>
            <input className="text-white  bg-amber-50  " name="username" type="text" />
          </div>
          <div>
            <label htmlFor="username">Address</label>
            <input className="text-white bg-amber-50 " name="address" type="text" />
          </div>
          <div>
            <label htmlFor="username">Email</label>
            <input className="text-white  bg-amber-50 " name="email" type="text" />
          </div>
          <div>
            <button className="text-white  bg-amber-50 " name="submit" value="Submit" type="submit" >Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
