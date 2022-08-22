import { useState } from 'react'
import { createTask } from '../data/tasks'

const TodoForm = ({ update }) => {
  const [newTodo, setNewTodo] = useState('')

  // function update() {
  //   fetch(`${process.env.REACT_APP_BACKEND}api/tasks`)
  //     .then((res) => res.json())
  //     .then((todo) => {
  //       setTodos(todo.data)
  //     })
  // }

  const addTodo = (e) => {
    e.preventDefault()

    createTask({ name: newTodo }).then(() => {
      setNewTodo('')
      update()
    })
  }

  return (
    <>
      <form aria-label='TodoForm' className='form' onSubmit={addTodo}>
        <input
          type='text'
          aria-label='TodoInput'
          className='todo_input'
          placeholder='Enter new todo'
          value={newTodo}
          onChange={(e) => setNewTodo(e.currentTarget.value)}
        />
        <button type='submit' className='todo_button'>
          Add todo
        </button>
      </form>
    </>
  )
}

export default TodoForm
