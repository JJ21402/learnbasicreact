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
      completed: false
    },
    {
      id: 3,
      title:'Play game',
      completed: false
    },
  ])

  return (
    <div className="App">
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
