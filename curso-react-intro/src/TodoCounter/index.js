import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos, loading }) {
  const title =
    totalTodos === completedTodos
      ? 'Felicidades TODOS completados'
      : `Has completado ${completedTodos} de ${totalTodos} TODOS`;

  return (
    <h1 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>
      {title}
    </h1>
  );
}

export { TodoCounter };
