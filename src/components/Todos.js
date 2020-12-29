import TodoItem from './TodoItem'

function Todos(props) {
  return (
    <div>
      <h1>Todos</h1>
      {props.todos.map(todo => (
          <TodoItem key={todo.id} todo= {todo}/>
      ) )}
    </div>
  );
}

export default Todos;
