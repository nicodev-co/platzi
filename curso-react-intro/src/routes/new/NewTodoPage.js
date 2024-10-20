import React from "react";
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from "../useTodos";

function NewTodoPage() {
  const { addTodo } = useTodos();

  return (
    <TodoForm 
      label="Crear nueva tarea"
      submitText="Crear tarea"
      submitEvent={(text) => addTodo(text)}
    />
  );
}

export { NewTodoPage };