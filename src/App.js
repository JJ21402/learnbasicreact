import './App.css';
import Todos from './components/Todos'
import React from 'react'

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title:'Take out trash',
      completed: false
    },
    {
      id: 2,
      title:'Dinner',
      completed: true
    },
    {
      id: 3,
      title:'Play game',
      completed: false
    },
  ])
  const markComplete = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      console.log(todo)
    return todo;
    }))
  }
  return (
    <div className="App">
      <Todos todos={todos}
      markComplete = {markComplete}/>
    </div>
  );
}

export default App;
