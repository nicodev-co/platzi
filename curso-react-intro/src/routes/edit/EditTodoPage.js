import React from 'react';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
import { useLocation, useParams } from 'react-router-dom';

function EditTodoPage() {
  const params = useParams();
  const location = useLocation();
  const id = Number(params.id);
  const { loading, getTodo, editTodo } = useTodos();

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando...</p>;
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }

  return (
    <TodoForm
      label='Editar tarea'
      defaultText={todoText}
      submitText='Actualizar tarea'
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage };
