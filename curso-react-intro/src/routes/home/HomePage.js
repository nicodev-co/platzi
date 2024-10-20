import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TodoHeader from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { TodosLoading } from '../../ui/TodosLoading';
import { TodosError } from '../../ui/TodosError';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { useTodos } from '../useTodos';
import { ChangeAlert } from '../../ui/ChangeAlert';

function HomePage() {
  const navigate = useNavigate();
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    completedTodos,
    deleteTodo,
    totalTodos,
    searchValue,
    setSearchValue,
    sincronizeTodo,
  } = useTodos();

  const { query } = useParams();

  useEffect(() => {
    if (query) {
      setSearchValue(query);
    } else {
      setSearchValue('');
    }
  }, [query, setSearchValue]);

  return (
    <>
      <div className='card'>
        <TodoHeader>
          <TodoCounter
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            loading={loading}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loading={loading}
          />
        </TodoHeader>

        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          searchText={searchValue}
          totalTodos={totalTodos}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={(searchText) => (
            <p>No hay resultados para {searchText}</p>
          )}
        >
          {(todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onCompleted={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
              onEdit={() => navigate(`/edit/${todo.id}`,{
                state: {todo}
              })}
            />
          )}
        </TodoList>

        <CreateTodoButton
        onClick={() => navigate('/new')}
        // setOpenModal={setOpenModal}
        />

        {/* {openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        )} */}
      </div>
      <ChangeAlert sincronize={sincronizeTodo} />
    </>
  );
}

export { HomePage };
