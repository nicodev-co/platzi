import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const { completedTodos, totalTodos} = React.useContext(TodoContext);
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