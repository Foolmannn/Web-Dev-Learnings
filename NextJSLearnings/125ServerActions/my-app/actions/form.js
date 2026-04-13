
"use server"
import fs from "fs/promises";

const submitAction = async (e)=>{
  //this is how we use the server actions 
  "use server"
  console.log(e.get("username"), e.get("address"), e.get("email")) /// this is how to get the data from the form like in php 
  fs.writeFile("write.txt",  ` Hey, ${e.get("username")} your address is ${e.get("address")} `)
}
export {submitAction} 
