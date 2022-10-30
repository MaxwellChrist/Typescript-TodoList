import React, { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem/TodoItem';

export interface AppState {
  todo: {
      name: string
      id: number
      completed: boolean
      note?: string
  }[]
}


function App() {

  const [todo, setTodo] = useState<AppState["todo"]>([
    {
      name: "Take out trash",
      id: 1,
      completed: false,
      note: "Do it before garbage day on tuesday"
    },
    {
      name: "Clean dishes",
      id: 2,
      completed: false,
    }
  ])

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoItem todo={todo}/>
    </div>
  );
}

export default App;