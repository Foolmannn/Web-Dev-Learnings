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
  const handleChange=(e)=>{
    settodo(e.target.value)
  }
  
  const handleAdd=()=>{
    settodos([...todos, {todo, isCompleted:false}])
    settodo("")
    console.log(todos)
  }

  return (
    <>
        <Navbar />
      <div className="main bg-violet-200  mb-5 p-5 rounded-xl mx-auto min-h-[80vh] ">
        <div className="addtodo my-5  text-black  ">
          <h1 className="font-bold text-3xl">Add New Todo</h1>
          <input onChange={handleChange} value={todo} type="text" className="w-2/3 bg-bg rounded "/>
          <button onClick={handleAdd} className=" font-bold bg-primary-dark py-1  px-3 rounded-md hover:bg-primary cursor-pointer  text-white ml-5 " >Add</button>
        </div>
    
        <h2 className="bg text-black font-bold text-2xl ">Your Todos</h2>
        <div className="todos">
          {todos.map((items)=>{

            return <div className="todo py-2 flex gap-10 w-2/4 justify-between " key={items.todo}>
            <div className={items.isCompleted ? "bg-success":"bg-danger"}>{items.todo}</div>
            <div className="btns flex gap-3 ">

            <button onClick={handleEdit} className="edit font-bold  bg-primary-dark  py-1  px-3 rounded-md hover:bg-primary  cursor-pointer  text-white ">Edit</button>
            <button onClick={handleDelete} className="delete font-bold  bg-primary-dark py-1  px-3 rounded-md hover:bg-primary cursor-pointer  text-white ">Delete</button>
            </div>

          </div>
          })}
        </div>
      </div>
    </>
  );
}
