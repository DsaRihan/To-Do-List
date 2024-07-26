import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [task, settask] = useState([]);

  const SubmitHandler =(e)=>{
    e.preventDefault()
    settask([...task,{title,desc}])
    settitle("")
    setdesc("")
    console.log(task)
  }

  const DeleteHandler = (i)=>{
    let temp=[...task]
    temp.splice(i,1)
    settask(temp)
  }

  let RenderTask = <h2>No Task Available</h2>

  if (task.length > 0){
    RenderTask = task.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between w-2/3'>
            <h5 className='text-2xl font-semibold uppercase'>{t.title}</h5>
            <h6 className='text-2xl font-semibold'>{t.desc}</h6> 
          </div>

          <button onClick={()=>{
            DeleteHandler(i)
          }}
           className='border-2 bg-red-600 text-white rounded-full w-10'>x</button>
        </li>
        
      )
    })
  }

  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My To-Do List</h1>
    <form onSubmit={SubmitHandler}>
      <input type="text" className='text-2xl border-2 border-zinc-800 m-8 px-4 py-2'
       placeholder='Enter the Task Here'
       value={title} onChange={(e)=>{ settitle(e.target.value) }}></input>

      <input type="text" className='text-2xl border-2 border-zinc-800 m-8 px-4 py-2'
       placeholder='Enter Description Here'
       value={desc} onChange={(e)=>{ setdesc(e.target.value) }}></input>

       <button className='bg-black rounded text-white px-4 py-2 text-2xl font-bold m-5'>Add Task</button>
    </form>

    <hr/>
    <div className='p-8 bg-slate-300'>
      <ul>
        {RenderTask}
      </ul>
    </div>
    </>
  )
}

export default App
