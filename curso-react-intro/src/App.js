import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React.js", completed: false },
  { text: "LLorar con la llorona", completed: false },
  { text: "LALALALA", completed: true }
];

function App() {
  return (
    <>

    <div className="card">

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}

      </TodoList>

      <CreateTodoButton />
    </div>

    </>

  );
}

export default App;

