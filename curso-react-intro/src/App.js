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
  { text: "LALALALA", completed: false },
  { text: "Estados derivados", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
  });
  console.log(`buscando ${searchValue}`);

  return (
    <>

      <div className="card">

        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))}

        </TodoList>

        <CreateTodoButton />
      </div>

    </>

  );
}

export default App;

