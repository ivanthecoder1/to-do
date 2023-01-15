
// In order to use a state in a function component, use useState hook
// Allows us to render our tasks each time it changes

// useRef allows us to reference elements in the html
import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList';
import './styles.css'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // Use state contains an array and can be destructured
  const [todos, setTodos] = useState([])
    const todoNameRef = useRef()
  
  // save our todo tasks in local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem
    (LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTask(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function addTasks (e){
    const name = todoNameRef.current.value
    if (name === "") return // empty input
    setTodos(prevsTodos => {
      return [...prevsTodos, { id: uuidv4(), name: name, complete: false}] // uuid to make random id
    })
    todoNameRef.current.value = null // clear out input
  }

  function clearTasks(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    // This is a fragment which allows us to contain multiple things
    <> 
      <TodoList todos = {todos} toggleTodo={toggleTask} /> 
      <input ref = {todoNameRef} type = "text" /> 
      <button onClick = {addTasks}> Add todo </button>
      <button onClick = {clearTasks}> Clear Completed Tasks </button>
      <div> {todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
