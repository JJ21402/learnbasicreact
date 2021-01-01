import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

function Todos(props) {
  return (
    <div>
      <h1>Todos</h1>
      {props.todos.map(todo => (
          <TodoItem key={todo.id} todo= {todo}
          markComplete = {props.markComplete}
          />
      ) )}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
