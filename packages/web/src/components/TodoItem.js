import { useState } from 'react'
import { updateTaskName, deleteTask } from '../data/tasks'

function TodoItem({ todo, update }) {
  const [edit, setEdit] = useState(false)
  const [newTodo, setNewTodo] = useState('')

  const changeTodo = (e) => {
    e.preventDefault()

    updateTaskName(todo.id, { name: newTodo }).then(() => {
      setEdit('')
      update()
    })
  }

  const deleteTodo = (e) => {
    e.preventDefault()

    deleteTask(todo.id).then(() => {
      update()
    })
  }

  return (
    <div className='todo'>
      {/*
          The below toggles between two components
          depending on the current value of the "edit"
          state variable
        */}
      {!edit ? (
        <div className='name'>{todo.attributes.name}</div>
      ) : (
        <form onSubmit={changeTodo}>
          <input
            className='todo_input'
            type='text'
            placeholder='Enter new todo'
            value={newTodo}
            onChange={(e) => setNewTodo(e.currentTarget.value)}
          />
          <button className='todo_button' type='submit'>
            Change todo
          </button>
        </form>
      )}
      <div>
        <button className='delete' onClick={deleteTodo}>
          delete
        </button>
        <button
          className='edit'
          onClick={() => {
            // this button toggles the "edit" state variable
            setEdit(!edit)

            // we add this snippet below to make sure that our "input"
            // for editing is the same as the one for the component when
            // it is toggled. This allows anyone using it to see the current
            // value in the element, so they don't have to write it again
            setNewTodo(todo.attributes.name)
          }}
        >
          edit
        </button>
      </div>
    </div>
  )
}

export default TodoItem
