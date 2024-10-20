import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronize: sincronizeTodo,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', []);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const addTodo = (text) => {
    const id = newTodoId();
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
      id
    });
    saveTodos(newTodos);
  };

  const getTodo = (id) => {
    return todos.find((todo) => todo.id === id);
  };

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index].completed = true;
    saveTodos(newTodos);
  };

  const editTodo = (id,newText) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index].text = newText;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  return {
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    editTodo,
    addTodo,
    sincronizeTodo,
    getTodo,
  };
}

function newTodoId() {
  return Math.floor(Math.random() * 1000);
}

export { useTodos };
