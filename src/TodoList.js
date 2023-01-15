import React from 'react'
import Todo from './Todo'

// todos is a prop
export default function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
        return <Todo key = {todo.id} toggleTodo={toggleTodo} todo = {todo} /> // key allows react to only rerender components that change instead of everything each time
    })
  )
}
