import React from 'react'

export default function Todo({ todo, toggleTodo}) {
  function handleTaskClick(){
    toggleTodo(todo.id)
  }
  
  return (
    <div>
        <label>
            <input type = "checkbox" checked = {todo.complete} onChange = {handleTaskClick} />
            {todo.name}
        </label>
        
    </div>
  )
}
