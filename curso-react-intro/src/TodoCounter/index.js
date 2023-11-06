import React from 'react';
import './TodoCounter.css'

function TodoCounter({ completedTodos, totalTodos}) {
    const title = totalTodos == completedTodos
        ? 'Felicidades TODOS completados'
        : `Has completado ${completedTodos} de ${totalTodos} TODOS`;

    return (
        <h1>
            {title}
        </h1>
    );
}

export { TodoCounter };