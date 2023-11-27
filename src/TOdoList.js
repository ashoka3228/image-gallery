import React from 'react'

function TOdoList({todos,onclicker}) {
  return (
    <div className='border border-2 '>
        {todos.map((todo,index)=>  
        <div className='justify-content-between' key={index}>{todo} <button className='btn btn-danger' onClick={onclicker}>Delete</button>  </div>
        )}
    </div>
  )
}

export default TOdoList