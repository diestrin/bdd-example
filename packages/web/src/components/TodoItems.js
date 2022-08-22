import TodoItem from './TodoItem'

const TodoItems = ({ todos, update }) => {
  return (
    <div>
      {todos.map((todo, i) => {
        return <TodoItem todo={todo} key={i} update={update} />
      })}
    </div>
  )
}

export default TodoItems
