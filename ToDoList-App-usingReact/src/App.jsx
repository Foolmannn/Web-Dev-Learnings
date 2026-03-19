import { useState } from "react";

import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {

  const [todo,settodo]= useState("")
  const [todos,settodos]= useState([])
  const handleEdit=()=>{

  }

  const handleDelete=()=>{

  }
  const handleChange=()=>{

  }

  const handleAdd=()=>{
    settodos([...todos, {todo, isCompleted:false}])
    settodo("")
  }

  return (
    <>
        <Navbar />
      <div className="main bg-violet-200  mb-5 p-5 rounded-xl mx-auto min-h-[80vh] ">
        <div className="addtodo my-5  text-black  ">
          <h1 className="font-bold ">Add New Todo</h1>
          <input onChange={handleChange} type="text"className="w-2/3 bg-bg rounded "/>
          <button onClick={handleAdd} className=" font-bold bg-primary-dark py-1  px-3 rounded-md hover:bg-primary cursor-pointer  text-white ml-5 " >Add</button>
        </div>
    
        <h2 className="bg text-black font-bold text-2xl ">Your Todos</h2>
        <div className="todos">
          <div className="todo flex gap-10 ">
            <div className="text ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, ad.</div>
            <button onClick={handleEdit} className="edit font-bold  bg-primary-dark  py-1  px-3 rounded-md hover:bg-primary  cursor-pointer  text-white ">Edit</button>
            <button onClick={handleDelete} className="delete font-bold  bg-primary-dark py-1  px-3 rounded-md hover:bg-primary cursor-pointer  text-white ">Delete</button>

          </div>
        </div>
      </div>
    </>
  );
}
