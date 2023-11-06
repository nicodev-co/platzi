import React from 'react';
import TodoHeader from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { useTodos } from './useTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    completedTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <>
      <div className='card'>
        <TodoHeader>
          <TodoCounter
            completedTodos={completedTodos}
            totalTodos={totalTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>

        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodos />}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onCompleted={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        <CreateTodoButton setOpenModal={setOpenModal} />

        {openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
