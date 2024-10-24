"use client"
import React, { useState } from "react"

const page = () =>{
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  
  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {task, desc}])
    settask("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) =>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }


  let rendertask = <h2 className="font-bold text-xl text-center my-4">No Task Available</h2>
  if(mainTask.length>0){
  rendertask = mainTask.map((t,i) =>{
    return(
      <li key={i} className="flex items-center justify-between">
      <div className="flex items-center justify-between mb-5 w-2/4">
        <h2 className="text-2xl font-semibold">{t.task}</h2>
        <h2 className="text-2xl font-semibold">{t.desc}</h2>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }
      } className="bg-red-400 text-white font-bold rounded px-4 py-2">Delete</button>
      </li>
    )
  })
}
  return(
    <>
    <h1 className="bg-black text-white font-bold text-5xl p-8 text-center">To-Do List</h1>
    <form onSubmit={submitHandler}>
      <div className="flex items-center justify-evenly">
      <input type = "text" placeholder = "Enter your task" className = "text-2xl px-4 py-2 border-4 border-zinc-700 m-5 "
      value={task}
      onChange={(e)=>{
        settask(e.target.value)
      }}
      />
      <input type = "text" placeholder = "Describe your task" className = "text-2xl px-4 py-2 border-4 border-zinc-700 m-5 " 
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className="px-4 py-3 rounded bg-black text-white text-2xl font-bold font-serif">Add Task</button>
      </div>
    </form>
    <hr />
    <div className="bg-slate-300 p-8">
      <ul>
        {rendertask}
      </ul>
    </div>
    </>
  )
}

export default page