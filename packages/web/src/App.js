import { useState, useEffect } from 'react'

import './App.css'

import Layout from './components/Layout'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'
import { fetchTasks } from './data/tasks'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    update()
  }, [])

  const update = () => {
    fetchTasks().then((taks) => setTodos(taks))
  }

  return (
    <Layout data={{ todos }}>
      <TodoForm update={update} />
      <TodoItems todos={todos} update={update} />
    </Layout>
  )
}

export default App
